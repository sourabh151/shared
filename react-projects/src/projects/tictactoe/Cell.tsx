import { useBoardContext } from "./contexts/UseBoardContext"

function Cell({ data, k }: { data: string, k: number }) {
  const { cells, setCells, changeTurn, turn, finished } = useBoardContext()
  function handleClick() {
    if (!finished) {
      setCells(cells.map((cell, i) => {
        if (i == k && !cells[i]) {
          return turn;
        }
        return cell;
      }))
      changeTurn()
    }
  }
  return (
    <div onClick={handleClick} className={`bg-green-400 border rounded-md flex items-center justify-center text-4xl font-bold text-white md:text-8xl ${data?"appear ":" "}`}>{data}</div>
  )
}

export default Cell
