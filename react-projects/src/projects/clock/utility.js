
export function unitCoordinates(ANGLE) {
  let xRun = ((1 + Math.cos(ANGLE)) / 2);
  let yRun = ((1 - Math.sin(ANGLE)) / 2);
  return [xRun, yRun];
}
export function coordinates(ANGLE, WIDTH, HEIGHT, cutoffWidth, cutoffHeight) {
  let [xRun, yRun] = unitCoordinates(ANGLE);
  xRun *= WIDTH;
  yRun *= HEIGHT;
  xRun -= cutoffWidth;
  yRun -= cutoffHeight;
  return {
    left: `${xRun}px`,
    top: `${yRun}px`,
  }
}
export function getTime() {
  const time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  hour = hour > 11 ? hour - 12 : hour;
  return [hour, minute, second]
}
export function getAngle(quantity, upperBound) {
  let angle = (2 * Math.PI * ((quantity) / upperBound))
  angle += (Math.PI * 3 / 2)
  return angle;
  //angle = (angle - (Math.PI / 2));
  //angle = 2*Math.PI - angle
}
export const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
