import React, { createContext, useContext } from 'react'
import App from "./App.jsx"

export const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext)

function Main() {
  return (
  <GlobalContext.Provider value={{name:"sourabh"}}>
      <App />
    </GlobalContext.Provider>
  )
}

export default Main
