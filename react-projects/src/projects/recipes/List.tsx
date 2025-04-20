import { useCallback, useEffect, useState } from "react"
import Item from "./Item"
import { Recipes } from "./types"

function List() {
  const [data, setData] = useState<Recipes>();
  const fetchData = useCallback(async () => {
    const res = await fetch("https://dummyjson.com/recipes")
    if (res.ok) {
      const jsonData = await res.json()
      console.log(jsonData);
      setData(jsonData)
    }
  }, [])
  useEffect(() => {
    fetchData();
  }, [fetchData])
  return (
    <div className="flex flex-col gap-4 p-4 bg-primary" >{
      data?.recipes.map((recipe) => {
        return <Item key={recipe.id} recipe={recipe} />
      })
    }</div>
  )
}

export default List
