import Lorem from "./Lorem"
import Navbar from "./Navbar"

function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Lorem para={50} maxWords={10} />
    </div>
  )
}

export default App
