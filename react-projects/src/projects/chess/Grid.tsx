import Block from "./Block";

let c = 0
let cells: number[] = Array(9).fill(0)
cells = cells.map(() => (++c))
function Grid() {
  console.log(cells);

  return (
    <div className='w-[112px] h-[112px] bg-amber-300 grid grid-cols-3 gap-2'>
      {
        cells.map((v) => {
          return <div key={v} className="w-8 h-8 bg-amber-600 grid place-items-center">
            <Block />
          </div>
        })
      }
    </div>
  )
}

export default Grid
