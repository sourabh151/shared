import { useCommentsContext } from "./contexts/CommentsContextProvider.tsx"
import Message from "./Message.tsx"
function Chats() {
  const { comments } = useCommentsContext()
  return (
    <div className="flex-grow flex-1">{
      comments.map((comment) => {
        return <div key={comment.id}>
          <Message message={comment} />
          {
            comment.replies.map((reply) => {
              return <Message message={reply} key={reply.id} />
            })
          }
        </div>
      })
    }</div>
  )
}

export default Chats
