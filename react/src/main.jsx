import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BookList from './john/01-fundamentals/src/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookList />
  </StrictMode>,
)
