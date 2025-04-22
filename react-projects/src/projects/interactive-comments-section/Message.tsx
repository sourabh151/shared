import type { Comment, Reply } from "./index.d.ts"
function Message({ message }: { message: Comment | Reply }) {
  return (
    <div className="bg-myWhite w-full ">
      <div>
      {message.createdAt} 
      </div>
    </div>
  )
}

export default Message
