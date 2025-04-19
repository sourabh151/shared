import { memo } from "react"
function Hour({ angle, time }) {
  //angle += (Math.PI * 2 / 3)
  return (
    <div className='hour-hand' style={{ transform: `rotateZ(${angle}rad)` }}>
    </div>
  )
}

export default memo(Hour)
