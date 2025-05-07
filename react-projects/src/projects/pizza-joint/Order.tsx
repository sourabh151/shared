import { usePizzaContext } from "./contexts/PizzaContext"

function Order() {
  const { base, toppings } = usePizzaContext()

  return (
    <div className="w-full h-full flex flex-col justify-center gap-10 items-center">
      <h3 className="text-white text-2xl font-bold">Thank you for your Order :)</h3>
      <p className="text-slate-200">you ordered a {base} pizza with:</p>
      <div>
        {
          toppings.map((topping) => {
            return <p key={topping.split(" ")[0]} className="text-slate-200">{topping}</p>
          })
        }
      </div>
    </div>
  )
}

export default Order
