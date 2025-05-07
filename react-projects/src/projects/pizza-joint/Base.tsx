import { Link } from "react-router-dom"
import { usePizzaContext } from "./contexts/PizzaContext"
import { useEffect } from "react";
import SelectButton from "./SelectButton";
import { isInputElement } from "./utilities/utility"
import {motion} from "framer-motion"

const bases = ["Classic", "Thin & Crispy", "Thick Crust"]


function Base() {
  const { base, setBase } = usePizzaContext()
  useEffect(() => {
    const bases = document.getElementsByName("base");
    let once = true
    for (const b of bases) {
      if (once) {
        setBase("Classic")
        once = false;
      }
      b.addEventListener("input", () => {
        if (isInputElement(b)) {
          if (b.checked) {
            setBase(b.value)
          }
        }
      })
    }
  })
  return (
    <motion.div className="w-full h-full flex gap-4 flex-col justify-center items-center"
      initial={{x:"100vw"}}
      animate={{x:0}}
      transition={{duration:0.6,type:"spring"}}

    >
      <div>
        <h3 className="text-white text-2xl font-bold border-b border-b-slate-200">Step 1: Choose Your Base</h3>
        <motion.div className="flex flex-col gap-4 mt-4"
          initial={{x:"100vw"}}
          animate={{x:0}}
          transition={{staggerChildren:0}}
          
        >
          {
            bases.map((base, i) => {
              return <SelectButton key={base.split(" ")[0]} name="base" value={base} type="radio" i={i === 0 ? true : false} />
            })
          }
        </motion.div>
      </div>
      {
        base &&
          <motion.div
            initial={{x:"-200vw"}}
animate={{x:0}}
            transition={{delay:1}}
          >
        <Link to="/toppings" className="text-white border border-white rounded-full px-4 py-2">
          Next
        </Link></motion.div>}
    </motion.div>
  )
}

export default Base
