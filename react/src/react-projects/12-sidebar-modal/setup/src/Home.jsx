import { FaBars } from 'react-icons/fa'
import { useAppContext } from './App'

const Home = () => {
  const { setShowModal, showModal, setShowSidebar, showSidebar } = useAppContext()
  return (
    <main>
      <header>
        <button onClick={() => setShowSidebar(!showSidebar)} >
          <FaBars />
        </button>
      </header>
      <article>
        <button className='btn' onClick={() => setShowModal(!showModal)}>show modal</button>
      </article>
    </main>
  )
}

export default Home
