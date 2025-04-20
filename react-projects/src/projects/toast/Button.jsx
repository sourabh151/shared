import { useGlobalContext } from './App';


function Button({ name }) {
  const { toastsList, setToastsList } = useGlobalContext()
  function handleClick() {
    if (!(toastsList.includes(name))) {
      setToastsList((i) => {
        return [...i, name]
      })
      setTimeout(() => {
        setToastsList((i) => {
          return i.filter((v) => v !== name)
        })
      }, 5000)
    }
  }
  return (
    <button onClick={() => handleClick()} className={"btn " + name}>{name}</button>
  )
}

export default Button
