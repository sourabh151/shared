import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import BookList from './john/01-fundamentals/src/index.jsx'
//import App from "./john/02-backroads-project/final/src-2/App.jsx";
import App from "./john/03-advanced-react/src/App.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
