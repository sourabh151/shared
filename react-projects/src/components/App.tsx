import ReducerTest from "./ReducerTest"
import UseReducer from "./contexts/UseReducer.tsx"

function App() {
  return (
    <UseReducer>
      <div className="w-screen h-screen flex items-center justify-center">
        <ReducerTest />
      </div>
    </UseReducer>
  )
}

export default App
