import { GlobalContext, useGlobalContext } from "./Main"

function App() {
  const { name } = useGlobalContext();
  return (
    <GlobalContext.Provider value={{age:20}}>
      <h1>{name}</h1>
    </GlobalContext.Provider>
  )
}

export default App
