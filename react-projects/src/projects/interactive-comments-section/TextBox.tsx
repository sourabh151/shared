import { useUserContext } from "./contexts/UserContextProvider"

function TextBox({ btn }: { btn: string }) {
  const { user } = useUserContext()
  return (
    <div className="w-full h-full p-4 grid grid-cols-10 grid-rows-8">
      <img src={"/src/projects/interactive-comments-section/" + user?.image.png} className="w-8 h-8 rounded-full col-start-1 col-span-4 row-start-6 row-span-2"></img>
      <textarea className="h-full rounded-md border-r-myGrey500 col-start-1 col-span-full row-start-1 row-span-4" placeholder="Add a comment..."></textarea>
      <button className="py-1 px-4 rounded-lg bg-myPurple600 text-myWhite font-bold col-start-7 col-span-full row-start-6 row-span-2">{btn}</button>
    </div>
  )
}

export default TextBox
