//import { IconType } from "react-icons"

import { ReactElement } from "react"

export type Recipe = {
  caloriesPerServing: number,
  cookTimeMinutes: number,
  cuisine: string,
  difficulty: "Easy" | "Medium" | "Hard",
  id: number,
  image: string,
  ingredients: string[],
  instructions: string[],
  mealType: string[],
  name: string,
  prepTimeMinutes: number,
  rating: number,
  reviewCount: number,
  servings: number,
  tags: string[],
  userId: number
}
export type Recipes = {
  limit: number,
  skip: number,
  total: number,
  recipes: Recipe[]
}
export type ItemProps = {
  key: number,
  recipe: Recipe,
}
export type TokenProps = {
  value: string | number,
  color: string,
  children?: ReactElement
}
export enum color {
  "Easy" = "bg-green-400 ",
  "Medium" = "bg-orange-500 ",
  "Hard" = "bg-red-400 ",
  "Default" = "bg-primary "
}
export type  DataContextProviderValues = { data: Recipes | undefined; setData: React.Dispatch<React.SetStateAction<Recipes | undefined>>;recipes: Recipe[] | undefined; setRecipes: React.Dispatch<React.SetStateAction<Recipe[] | undefined>>; }
export type DataContextProviderProps = {
  children:React.ReactNode
}
