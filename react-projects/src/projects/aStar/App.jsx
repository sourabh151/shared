import React, { useState } from 'react'

const row = 10;
const col = 10;

function App() {
  const [cells, setCells] = useState([
    [0, 0, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 1, 0, 0],
  ])
  return (
    <main className='w-screen h-screen flex items-center justify-center bg-slate-500'>

      <div className={`w-[270px] h-[270px] grid grid-rows-10 grid-cols-10 gap-2 bg-slate-300 ps-1 py-0.5 shadow-md shadow-slate-600`}>
        {
          cells.map((row) => {
            return <> {
              row.map((cell) => {
                return <div className={`w-4 h-4 ${cell ? "bg-red-500" : "bg-green-500"}`}></div>
              })
            }
            </>
          })
        }
      </div>
    </main>
  )
}

export default App
