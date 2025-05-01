import { useEffect } from 'react'
import Chats from "./Chats"
import { useUserContext } from './contexts/UserContextProvider'
import data from "./data.json"
import { useCommentsContext } from './contexts/CommentsContextProvider';
import Footer from './Footer';

function Main() {
  const { setUser } = useUserContext();
  const { setComments } = useCommentsContext()
  useEffect(() => {
    setUser(data.currentUser)
    setComments(data.comments)
  }, [setUser, setComments])
  return (
    <main className="bg-myGrey100 w-screen h-screen md:flex justify-center items-center">
      <div className="p-4 w-full h-full flex flex-col max-w-screen-sm">
        <Chats />
        <Footer />
      </div>
    </main>
  )
}

export default Main
