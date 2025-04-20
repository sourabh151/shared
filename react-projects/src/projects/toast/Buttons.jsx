import { toasts } from "./data"
import Button from './Button'

function Buttons() {
  return (
    <div className='buttons'>
      {
        toasts.map(({ id, name, message }) => {
          return <Button key={id} name={name} message={message} />
        })
      }
    </div>
  )
}

export default Buttons

