function App() {
  let data = [
    1, 2, 3, 4,5,6,7,8
  ]
  return (
    <div className="w-screen h-screen bg-amber-600 p-4 flex flex-row gap-2 flex-wrap justify-center items-center">
      {
        data.map((cell, i) => {
          return <div key={i} className="bg-white border-violet-800 border-4 min-w-24 h-24">{cell}</div>
        })
      }
    </div>
  )
}

export default App
