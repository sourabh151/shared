import { useEffect, useState } from "react";
import { useDataContext } from "./context/DataContextProvider"

function Filters() {
  const { data, setRecipes } = useDataContext();
  const [options, setOptions] = useState<string[]>([]);
  const [option, setOption] = useState("All");
  //getting options for select
  useEffect(() => {
    const variety: string[] = []
    variety.push("All")
    if (data) {
      data.recipes.forEach((recipe) => {
        if (!variety.includes(recipe.cuisine)) {
          variety.push(recipe.cuisine);
        }
      })
    }
    if (variety) {
      setOptions(variety);
    }
  }, [data])
  //setting recipes array
  useEffect(() => {
    if (data) {
      if (option === "All") {
        setRecipes(data.recipes)
      } else {
        setRecipes(data.recipes.filter((recipe) => recipe.cuisine === option));
      }
    }
  }, [option, data, setRecipes])
  return (
    <div className="bg-primary p-4 flex flex-row w-full justify-center">
      <select className="text-lg text-primary bg-white p-2 rounded-md" value={option} onChange={(e) => setOption(e.target.value)}>
        {
          options.map((option) => <option key={option}>{option}</option>)
        }
      </select>
    </div>
  )
}

export default Filters
