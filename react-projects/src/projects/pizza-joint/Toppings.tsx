import { Link } from "react-router-dom"
import SelectButton from "./SelectButton"
import { usePizzaContext } from "./contexts/PizzaContext"
import { useEffect } from "react"
import { isInputElement } from "./utilities/utility"
import { motion } from "framer-motion"

const toppingsValues = ["mushrooms", "peppers", "onions", "olives", "extra cheese", "tomatoes"]
function Toppings() {
  const { toppings, setToppings } = usePizzaContext()
  useEffect(() => {
    const toppingElements = document.getElementsByName("topping");
    let once = true
    for (const t of toppingElements) {
      if (once) {
        setToppings(() => ["mushrooms"])
        once = false;
      }
      t.addEventListener("input", () => {
        if (isInputElement(t)) {
          if (t.checked) {
            setToppings((v) => {
              if (!v.includes(t.value)) {
                return [...v, t.value]
              }
              return v
            })
          }
          else {
            setToppings((v) => {
              if (v.includes(t.value)) {
                return v.filter((i) => !(i === t.value))
              }
              return v
            })
          }
        }
      })
    }
  }, [])

  return (
    <motion.div className="w-full h-full flex gap-4 flex-col justify-center items-center"
      initial={{x:"100vw"}}
      animate={{x:0}}
      transition={{duration:0.6,type:"spring"}}
    >
      <div>
        <h3 className="text-white text-2xl font-bold border-b border-b-slate-200">Step 2: Choose Toppings</h3>
        <div className="flex flex-col gap-4 mt-4">
          {
            toppingsValues.map((topping, i) => {
              return <SelectButton key={topping.split(" ")[0]} name="topping" value={topping} type="checkbox" i={i === 0 ? true : false} />
            })
          }
        </div>
      </div>
      {
        toppings && <Link to="/order" className="text-white border border-white rounded-full px-4 py-2">
          Order
        </Link>}
    </motion.div>
  )
}

export default Toppings
