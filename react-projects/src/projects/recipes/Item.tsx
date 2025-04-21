import { BiSolidDish } from "react-icons/bi"
import Token from "./Token"
import { ItemProps, color } from "./types"
import { GiCampCookingPot } from "react-icons/gi"

function Item({ recipe }: ItemProps) {
  return (
    <div className="w-full p-4 rounded-md bg-cardBg flex flex-row gap-4 shadow-md border border-secondary transition ease-in hover:scale-105 items-center active:scale-95">
      <img src={recipe.image} className="w-24 h-24 rounded-md" />
      <div className="flex  flex-col gap-2 w-full">
        <h2 className=" font-bold text-lg text-secondary">{recipe.name}</h2>
        <Token value={recipe.cuisine} color={color.Default} />
        <Token value={recipe.difficulty} color={color[recipe.difficulty]} />
        <div className="flex flex-row gap-2">
          <Token value={recipe.cookTimeMinutes} color={color.Default}>
            <GiCampCookingPot color="red" />
          </Token>
          <Token value={recipe.prepTimeMinutes} color={color.Default}>
            <BiSolidDish color="green" />
          </Token>
        </div>
      </div>
    </div>
  )
}

export default Item
