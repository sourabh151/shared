import { useReducerContext } from "./contexts/UseReducer.tsx"

function ReducerTest() {
  return (
    <div></div>
  )
}

export const Mode = () => {
  const { state, dispatch } = useReducerContext()
  return (
    <div onClick={
      () => {
        dispatch({
          type: "switchMode",
        })
      }
    }>
      {
        state.mode
      }
    </div>
  )
}
export const Count = () => {
  const { state, dispatch } = useReducerContext()
  return (
    <div>

    </div>
  )
}

export default ReducerTest
