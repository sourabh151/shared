import Main from "./Main.tsx"
import CommentsContextProvider from "./contexts/CommentsContextProvider.tsx"
import UserContextProvider from "./contexts/UserContextProvider"
function App() {
  return (
    <UserContextProvider>
      <CommentsContextProvider>
        <Main />
      </CommentsContextProvider>
    </UserContextProvider>
  )
}

export default App
