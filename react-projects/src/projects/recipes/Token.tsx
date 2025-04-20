import { TokenProps } from './types'

function Token({ value, color, children }: TokenProps) {
  return (
    <p className={`px-4 py-2   text-white text-lg rounded-3xl text-center ${color} flex flex-row items-center`} >
      {children && children}
      {
        value
      }</p >
  )
}

export default Token
