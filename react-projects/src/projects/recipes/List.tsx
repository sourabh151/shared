import { useCallback, useEffect } from "react"
import Item from "./Item"
import { useDataContext } from "./context/DataContextProvider";

function List() {
  const { recipes, setData } = useDataContext();
  const fetchData = useCallback(async () => {
    const res = await fetch("https://dummyjson.com/recipes")
    if (res.ok) {
      const jsonData = await res.json()
      console.log(jsonData);
      setData(jsonData)
    }
  }, [setData])
  useEffect(() => {
    fetchData();
  }, [fetchData])
  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 md:p-8 lg:grid-cols-3" >{
      recipes?.map((recipe) => {
        return <Item key={recipe.id} recipe={recipe} />
      })
    }</div>
  )
}

export default List
