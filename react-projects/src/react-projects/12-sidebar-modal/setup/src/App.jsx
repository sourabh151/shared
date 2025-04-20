import React, { createContext, useContext, useState } from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import "./style.css"
export const AppContext = createContext();
export const useAppContext = () => {
  return useContext(AppContext);
}
function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <AppContext.Provider value={{ showModal, setShowModal, showSidebar, setShowSidebar }}>
      <Home />
      <Modal />
    </AppContext.Provider>
  )
}

export default App
