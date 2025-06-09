import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './projects/2048/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
