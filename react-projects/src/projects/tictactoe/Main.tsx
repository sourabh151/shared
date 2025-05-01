import App from './App'
import UseBoardContext from './contexts/UseBoardContext'

function Main() {
  return (
    <UseBoardContext>
      <App />
    </UseBoardContext>
  )
}

export default Main
