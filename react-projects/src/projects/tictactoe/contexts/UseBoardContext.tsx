import { createContext, useCallback, useContext, useState } from "react"
import { analyseBoard } from "../alg/minimax.ts"

const BoardContext = createContext<{ cells: string[]; setCells: React.Dispatch<React.SetStateAction<string[]>>; changeTurn: () => void; turn: string; analyseBoard: (pos: string[]) => number; finished: boolean; setFinished: React.Dispatch<React.SetStateAction<boolean>>; setTurn: React.Dispatch<React.SetStateAction<string>>; } | null>(null);



function UseBoardContext({ children }: { children: React.ReactNode }) {
  const [cells, setCells] = useState([
    "", "", "", "", "", "", "", "", ""
  ])
  const [turn, setTurn] = useState("X");
  const [finished, setFinished] = useState(false)
  const changeTurn = useCallback(() => {
    setTurn(turn === "X" ? "O" : "X")
  }, [turn])
  return (
    <BoardContext.Provider value={{ cells, setCells, changeTurn, turn, analyseBoard, finished, setFinished, setTurn }}>
      {children}
    </BoardContext.Provider>
  )
}
export const useBoardContext = () => {
  const context = useContext(BoardContext);
  if (context) {
    return context;
  }
  throw new Error("use context hook inside Context only")
}

export default UseBoardContext
