import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/Root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>
  }
])
function Main() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default Main
