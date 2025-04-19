import { coordinates, getAngle, hours } from "./utility"
import Hands from "./Hands"
const MARK = 20 / 2;
const WIDTH = 180
const HEIGHT = 180
function HourMarks() {
  return (
    <div className='hour-marks' style={{ width: WIDTH, height: HEIGHT }}>
      {hours.map((item) => {
        let angle = getAngle(item, 12);
        angle = (angle - (Math.PI / 2));
        angle = 1.5 * Math.PI - angle

        return (
          <p className='mark'
            style={coordinates(angle, WIDTH, HEIGHT, MARK, MARK)}
            key={item}>
            {item}
          </p>)
      })}
      <Hands />
    </div>
  )
}

export default HourMarks
