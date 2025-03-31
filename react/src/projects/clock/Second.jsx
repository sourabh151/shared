
import { memo } from "react"
function Second({ angle, time }) {
  return (
    <div className='minute-hand' style={{ transform: `rotateZ(${angle}rad)` }}>
    </div>
  )
}

export default memo(Second)
