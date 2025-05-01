import ThemeContextProvider from './contexts/ThemeContext'
import App from "./App.tsx"
function Main() {
  return (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  )
}

export default Main
