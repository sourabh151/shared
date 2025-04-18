import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import BookList from './john/01-fundamentals/src/index.jsx'
//import App from "./john/02-backroads-project/final/src-2/App.jsx";
//import App from "./john/03-advanced-react/src/App.jsx"
//import App from "./john/react-router-6-tutorial/src/final/App"
//import App from "./john/20-react-router/Main.jsx"
import App from "./projects/toast/App"
// import App from "./repo/App"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
