import { createContext, useCallback, useContext, useState } from "react"

export type ThemeContextProps = {
  children: React.ReactNode
}
export type ThemeFormat = {
  bgColor: string,
  accentColor: string,
  primaryTextColor: string,
  secondaryTextColor: string
}
const Light: ThemeFormat = {
  bgColor: "bg-white",
  accentColor: "bg-pink-500",
  primaryTextColor: "text-black",
  secondaryTextColor: "text-slate-600"
}
const Dark: ThemeFormat = {
  bgColor: "bg-black",
  accentColor: "bg-pink-300",
  primaryTextColor: "text-white",
  secondaryTextColor: "text-slate-300"
}
type ThemeContextValues = { theme: ThemeFormat; setTheme: React.Dispatch<React.SetStateAction<ThemeFormat>>; switchTheme: () => void; } | null
const ThemeContext = createContext<ThemeContextValues>(null);
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context) {
    return context;
  }
  throw new Error("use theme context inside App component only")
}

function ThemeContextProvider({ children }: ThemeContextProps) {
  const [theme, setTheme] = useState<ThemeFormat>(Light)
  const switchTheme = useCallback(() => {
    setTheme(theme.bgColor === "bg-white" ? Dark : Light)
  }, [setTheme])
  return (
    <ThemeContext.Provider value={{ theme, setTheme, switchTheme }}>
      {
        children
      }
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
