import { createContext, useContext, useState } from 'react'
import type { UserContextProviderProps, UserContextSchema, User } from "../index.d.ts"

const UserContext = createContext<UserContextSchema>(null);


function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("please use context inside context")
  }
  return context;
}

export default UserContextProvider
