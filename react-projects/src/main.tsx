import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './react-projects/02-tours/setup/src/App.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
