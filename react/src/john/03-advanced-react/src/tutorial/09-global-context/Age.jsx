import { useGlobalContext } from './Main'

function Age() {
  const {age} = useGlobalContext
  return (
    <p>{age}</p>
  )
}

export default Age
