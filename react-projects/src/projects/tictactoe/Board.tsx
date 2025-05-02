import { useCallback, useEffect, useState } from "react"
import Cell from "./Cell"
import { useBoardContext } from "./contexts/UseBoardContext";
import { minimax, states } from "./alg/minimax.ts"

function Board() {
  const { cells, setCells, analyseBoard, finished, setFinished, setTurn,turn ,changeTurn} = useBoardContext()
  const [gameState, setGameState] = useState(states.C);
  useEffect(() => {
    const r = analyseBoard(cells);
    if (!finished) {
      switch (r) {
        case states.X:
          setGameState(states.X)
          setFinished(true)
          break;
        case states.O:
          setGameState(states.O)
          setFinished(true)
          break;
        case states.D:
          setGameState(states.D)
          setFinished(true)
          break;
        default:
          break;
      }
    }
  }, [analyseBoard, finished, setFinished, cells])
  useEffect(()=>{
    if(turn === "O" && !finished){
      const r = minimax(cells,states.O)
      setCells((prevCells) => {
        const nextCells = [...prevCells];
        nextCells[r[1]] = turn;
        return nextCells;
      });
      // setTurn("X")
      changeTurn()
    }
  })
  const handleRestart = useCallback(() => {
    setGameState(states.C);
    setCells([
      "", "", "", "", "", "", "", "", ""
    ])
    setFinished(false)
    setTurn("X")
  }, [setCells, setGameState, setFinished, setTurn])
  return (
    <>
      <section className="w-60 h-60 p-2 border border-white bg-emerald-200 grid grid-cols-3 grid-rows-3 gap-2.5 rounded-md shadow-md shadow-blue-200 md:w-[480px] md:h-[480px] lg:w-[720px] lg:h-[720px]">
        {
          cells.map((cell, i) => {
            return <Cell data={cell} key={i} k={i} />
          })
        }
      </section>
      <div className="w-full h-24 flex items-center justify-around flex-col bg-blue-200 shadow-md shadow-emerald-200 border border-white">
        <p>
          {
            gameState === states.D ? "DRAW" : gameState === states.X ? "X" + " WINS" : gameState === states.O ? "O" + " WINS" : ""
          }
        </p>
        {
          gameState === states.C || <button onClick={() => handleRestart()} className="bg-white px-2 py-1 border border-red-300 rounded-xl shadow-md shadow-red-50 active:scale-95 hover:scale-105 transition-transform duration-300">Restart</button>
        }
      </div>
    </>
  )
}

export default Board
