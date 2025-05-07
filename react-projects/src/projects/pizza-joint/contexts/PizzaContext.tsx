import React, { createContext, useContext, useState } from 'react'

type pizzaContextSchema = {
  base: string;
  setBase: React.Dispatch<React.SetStateAction<string>>;
  toppings: string[];
  setToppings: React.Dispatch<React.SetStateAction<string[]>>;
} | null

const pizzaContext = createContext<pizzaContextSchema>(null);
type PizzaContextProps = {
  children: React.ReactNode
}
function PizzaContext({ children }: PizzaContextProps) {
  const [base, setBase] = useState<string>("");
  const [toppings, setToppings] = useState<string[]>([])
  return (
    <pizzaContext.Provider value={{ base, setBase, toppings, setToppings }}>
      {children}
    </pizzaContext.Provider>
  )
}

export function usePizzaContext() {
  const context = useContext(pizzaContext)
  if(context){
    return context
  }
  throw new Error("please use pizzaContext inside context tree")
}

export default PizzaContext
