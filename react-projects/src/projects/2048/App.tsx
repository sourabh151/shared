//import { useRef } from "react"
import { BoardState, useBoard } from "./store"

const WIDTH = 300;
const HEIGHT = 300
function App() {
  const board = useBoard((state: BoardState) => state.board)
  //const boardBox = useRef<HTMLDivElement>(null)
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-600">
      <div className={`border-4 border-gray-800 bg-gray-700 rounded-lg relative h-[${HEIGHT}px] w-[${WIDTH}px]`}>
        {board.map((row: number[], rowIndex: number) => (
          row.map((cell, cellIndex) => (
            <div key={`${rowIndex}-${cellIndex}`} className={`absolute w-16 h-16 flex items-center justify-center text-white text-xl ${cell ? 'bg-blue-500' : 'bg-gray-300'}`}>
              {cell || ''}
            </div>
          ))
        ))}
      </div>
    </div>
  )
}

export default App
