import { useGlobalContext } from './App'
import { toasts } from './data'
import Toast from './Toast'

function Toasts() {
  const { toastsList } = useGlobalContext()
  return (
    <div className='toasts'>
      {
        toasts.map(({ id, name, message }) => {
          return toastsList.includes(name) && <Toast key={id} message={message} name={name} />
        })
      }
    </div>
  )
}

export default Toasts
