import { useEffect, useState } from 'react'
import { getAngle, getTime } from './utility'
import Hour from './Hour';
import Minute from './Minute';
import Second from './Second';

function Hands() {
  const [currentTime, setCurrentTime] = useState(getTime());
  useEffect(() => {
    const intID = setInterval(() => {
      setCurrentTime(getTime());
    }, 1000);
    return () => clearInterval(intID)
  }, [])
  return (
    <div className='hands'>
      <Hour angle={getAngle(currentTime[0], 12)} time={currentTime[0]} />
      <Minute angle={getAngle(currentTime[1], 60)} time={currentTime[1]} />
      <Second angle={getAngle(currentTime[2], 60)} time={currentTime[2]} />
    </div>
  )
}

export default Hands
