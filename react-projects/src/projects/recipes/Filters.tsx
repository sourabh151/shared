import { useEffect, useState } from "react";
import { useDataContext } from "./context/DataContextProvider"

function Filters() {
    const { data, setData } = useDataContext();
    const [options, setOptions] = useState<string[]>([]);
    const [option,setOption] = useState("All");
    useEffect(() => {
        let variety: string[] = []
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
    useEffect(()=>{
        if (option === "All") {
            setData(data);
        } else {
            if (data) {
                setData({ ...data,recipes: data.recipes.filter((recipe) => recipe.cuisine === option) });
            }
        }
    },[option])
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