import { useEffect, useState } from "react";

const ToggleChallenge = () => {
  const [flip, setFlip] = useState(true);
  // useEffect(() => {
  //   alert("flipped to " + flip);
  // }, [flip])
  return (
    <div>
      <button onClick={() => setFlip(!flip)} className="btn">Hide Alert</button>
      {flip && <Alert />}
    </div>)
};

export function Alert() {
  return (
    <div className="alert alert-danger">Alert</div>
  )
}

export default ToggleChallenge;
