import { BiRightArrow } from "react-icons/bi"
//import { usePizzaContext } from "./contexts/PizzaContext"
import { motion } from "framer-motion"

type SelectButtonProps = {
  type: "checkbox" | "radio",
  name: string,
  value: string,
  i: boolean
}
function SelectButton({ type, name, value, i }: SelectButtonProps) {
  //const { toppings, base } = usePizzaContext()
  //function isChecked() {
  //  if (type === "checkbox") {
  //    return toppings.includes(value)
  //  }
  //  else {
  //    return base.includes(value)
  //  }
  //}
  return (
    <motion.div className="flex items-center gap-2"
    >
      <input type={type} id={value.split(" ")[0]} name={name} value={value} className="hidden peer" defaultChecked={i} />
      <BiRightArrow color="white" className="w-4 h-4 hidden peer-checked:block" />
      <label htmlFor={value.split(" ")[0]} className="text-slate-200 peer-checked:font-bold peer-checked:text-white">{value}</label>
    </motion.div>
  )
}

export default SelectButton
