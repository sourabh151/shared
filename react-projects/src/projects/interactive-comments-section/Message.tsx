import { useUserContext } from "./contexts/UserContextProvider.tsx"
import type { Comment, Reply } from "./index.d.ts"
function Message({ message }: { message: Comment | Reply }) {
  const { user } = useUserContext()
  return (
    <div className="bg-myWhite w-full p-4 grid rounded-md grid-rows-5 grid-cols-2 gap-1">
      {("replyingTo" in message) && <div></div>}
      <div className="flex flex-row gap-4 p-4 row-start-1 col-start-1 row-span-1 col-span-2">
        <img src={"/src/projects/interactive-comments-section/" + message.user?.image.png} className="w-8 h-8" />
        <p className=" font-bold">{message.user?.username}</p>
        {(user?.username === message.user?.username) && <div>you</div>}
        <p className="text-myGrey500">{message.createdAt}</p>
      </div>
      <div className="row-start-2 row-span-3 col-start-1 col-span-2">
        <p className="text-myGrey500">{message.content}</p>
      </div>
      <div className="flex flex-row bg-myGrey100 text-myPurple200 rounded-lg row-start-4 col-start-1 w-24 h-8 justify-around items-center">
        <button className="p-1"><img src="/src/projects/interactive-comments-section/images/icon-plus.svg" /></button>
        <p className="p-1 text-myPurple600 font-bold">{message.score}</p>
        <button className="p-1"><img src="/src/projects/interactive-comments-section/images/icon-minus.svg" /></button>
      </div>
      <div>
        {
          (user?.username === message.user?.username) ?
            <div>
              <button className=""><img src="/src/projects/interactive-comments-section/images/icon-edit.svg" />Edit</button>
              <button className=""><img src="/src/projects/interactive-comments-section/images/icon-delete.svg" />Delete</button>
            </div> :
            <div>
              <button className=""><img src="/src/projects/interactive-comments-section/images/icon-reply.svg" />Reply</button>
            </div>
        }
      </div>
    </div>
  )
}

export default Message
