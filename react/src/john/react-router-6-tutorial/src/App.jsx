import { BrowserRouter, Routes, Route } from "react-router"
import "./App.css"
function App() {
  return <BrowserRouter>
    <Routes path="/" >
      <Route path="about" element={<h1>about</h1>}></Route>
    </Routes>
    <Routes path="/start/" >
      <Route path="about" element={<h1>star about</h1>}></Route>
    </Routes>
  </BrowserRouter>
}

export default App;
