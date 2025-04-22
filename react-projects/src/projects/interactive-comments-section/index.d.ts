export type UserContextProviderProps = {
  children: React.ReactNode
}
export type User = { image: { png: string; webp: string; }; username: string; } | null
export type UserContextSchema = { user: User; setUser: React.Dispatch<React.SetStateAction<User>>; } | null
export type Message = { id: number; content: string; createdAt: string; score: number; user: User; }
export type Comment = Message & { replies: Reply[]}
export type Reply = Message & {replyingTo: string }
export type CommentsContextProviderProps = {
  children: React.ReactNode
}
export type CommentsContextSchema = { comments: Comment[]; setComments: React.Dispatch<React.SetStateAction<Comment[]>>; } | null

