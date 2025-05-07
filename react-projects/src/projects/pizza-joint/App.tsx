import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Base from "./Base"
import Toppings from "./Toppings"
import Order from "./Order"
//import Navbar from "./Navbar"
import PizzaContext from "./contexts/PizzaContext"
import HomePage from "./HomePage"
function App() {
  return (
    <PizzaContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomePage />}></Route>
            <Route path="base" element={<Base />}></Route>
            <Route path="toppings" element={<Toppings />}></Route>
            <Route path="order" element={<Order />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PizzaContext>
  )
}

export default App
