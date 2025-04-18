import { createContext, useContext, useState } from "react"
import "./App.css"
import Buttons from './Buttons'
import Toasts from "./Toasts"
const GlobalContext = createContext();
export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
function App() {
  const [toastsList, setToastsList] = useState([])
  return (
    <GlobalContext.Provider value={{ toastsList, setToastsList }}>
      <main>
        <Buttons />
        <Toasts />
      </main>
    </GlobalContext.Provider >
  )
}

export default App
