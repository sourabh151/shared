import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './projects/tictactoe/Main.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
