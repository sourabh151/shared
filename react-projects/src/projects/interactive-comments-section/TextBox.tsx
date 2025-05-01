import { useUserContext } from "./contexts/UserContextProvider"

function TextBox({ btn }: { btn: string }) {
  const { user } = useUserContext()
  return (
    <div className="w-full h-full p-4 grid grid-cols-12 grid-rows-8 gap-1">
      <img src={"/src/projects/interactive-comments-section/" + user?.image.png} className="w-8 h-8 rounded-full col-start-1 col-span-2 row-start-7 md:row-start-1"></img>
      <textarea className="p-2 h-full rounded-md border border-r-myGrey500 col-start-1 row-start-1 col-span-full row-span-5 resize-none md:col-start-2 md:col-span-9 md:row-span-full" placeholder="Add a comment..."  ></textarea>
      <button className="py-1 px-4 rounded-lg bg-myPurple600 text-myWhite font-bold col-start-10 row-start-7 row-span-3 col-span-3 md:row-start-1 md:col-start-11 md:row-span-4">{btn}</button>
    </div>
  )
}

export default TextBox
