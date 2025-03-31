
import { memo } from "react"
function Minute({angle,time}) {
  //angle += (Math.PI * 2 / 3)
  return (
    <div className='second-hand' style={{ transform: `rotateZ(${angle}rad)` }}>
    </div>
  )
}

export default memo(Minute)
