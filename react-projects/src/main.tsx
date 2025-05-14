import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './projects/lategram/Main'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
