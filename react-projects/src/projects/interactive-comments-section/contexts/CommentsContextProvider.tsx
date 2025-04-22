import { createContext, useContext, useState } from 'react'
import type { CommentsContextProviderProps, CommentsContextSchema, Comment } from "../index.d.ts"

const CommentsContext = createContext<CommentsContextSchema>(null);


export function CommentsContextProvider({ children }: CommentsContextProviderProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  return (
    <CommentsContext.Provider value={{ comments, setComments }}>
      {children}
    </CommentsContext.Provider>
  )
}
export function useCommentsContext() {
  const context = useContext(CommentsContext);
  if (!context) {
    throw new Error("please use context inside context")
  }
  return context;
}

export default CommentsContextProvider
