import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import { useState } from "react"
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"

function App() {
  const [theme, setTheme] = useState("My-Site-light")
  return (
    <main className={"w-screen bg-myBg text-myText min-h-screen " + theme}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
