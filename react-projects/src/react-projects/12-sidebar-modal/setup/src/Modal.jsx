import { FaTimes } from 'react-icons/fa'
import { useAppContext } from './App'
const Modal = () => {
  const { showModal, setShowModal } = useAppContext();
  return (<div className='modal'>
    <p>hello</p>
  </div>)
}

export default Modal
