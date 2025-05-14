import { createContext, useContext, useReducer } from 'react'

type UseReducerContextSchema = { state: { mode: string; count: number; }; dispatch: React.ActionDispatch<[]>; } | null
const ReducerContext = createContext<UseReducerContextSchema>(null);

function UseReducer({ children }: { children: React.ReactNode }) {
  const initialState = {
    mode: "light",
    count: 0
  }
  function reducer(prevState: {
    mode: string,
    count: number
  }) {
    console.log(prevState);

    return prevState;
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  )
}
export function useReducerContext() {
  const context = useContext(ReducerContext);
  if (context) {
    return context;
  }
  throw new Error("use Context hook inside context only")
}

export default UseReducer
