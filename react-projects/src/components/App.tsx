import Lorem from "./Lorem"
import Navbar from "./Navbar"

function App() {
  return (
    <div className="w-screen text-white bg-slate-900">
      <Navbar />
      <Lorem para={500} maxWords={10} />
    </div>
  )
}

export default App
