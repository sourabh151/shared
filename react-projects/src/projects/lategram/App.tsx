import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegistrationPage from "./RegistrationPage"

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center lategram_light bg-primary_accent" style={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationPage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
