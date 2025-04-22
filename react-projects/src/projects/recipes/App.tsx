import DataContextProvider from "./context/DataContextProvider.tsx"
import Filters from "./Filters.tsx"
import List from "./List.tsx"
function App() {
  return (
    <DataContextProvider>
      <main className="w-screen min-h-full h-auto bg-primary ">
        <>
          {
            <Filters />
          }
          {
            <List />
          }
        </>
      </main>
    </DataContextProvider>
  )
}

export default App
