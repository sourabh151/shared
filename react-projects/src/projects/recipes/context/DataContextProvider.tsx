import { createContext, useContext, useState } from "react";
import { Recipes, DataContextProviderValues, DataContextProviderProps, Recipe } from "../types"


const DataContext = createContext<DataContextProviderValues | null>(null);
function DataContextProvider({ children: children }: DataContextProviderProps) {
    const [data, setData] = useState<Recipes>();
    const [recipes, setRecipes] = useState<Recipe[]>();
    
    return (
        <DataContext value={{ data, setData ,recipes,setRecipes}}>
            {children}
        </DataContext>
    )
}
export function useDataContext() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useDataContext must be used within a DataContextProvider");
    }
    return context;
}

export default DataContextProvider
