import { BoardState, useBoard } from "./store"

function App() {
    const board = useBoard((state: BoardState) => state.board)
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-600">
            <div className="grid grid-cols-4 gap-4 border-4 border-gray-800 p-4 bg-gray-700 rounded-lg">
                {board.map((row: number[], rowIndex: number) => (
                    row.map((cell, cellIndex) => (
                        <div key={`${rowIndex}-${cellIndex}`} className={`w-16 h-16 flex items-center justify-center text-white text-xl ${cell ? 'bg-blue-500' : 'bg-gray-300'}`}>
                            {cell || ''}
                        </div>
                    ))
                ))}
            </div>
        </div>
    )
}

export default App