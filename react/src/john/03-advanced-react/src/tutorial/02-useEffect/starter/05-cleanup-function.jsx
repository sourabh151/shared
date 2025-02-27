import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <div>
      <button className="btn" onClick={handleToggle}>
        toggle
      </button>
      {
        toggle && <SecondComponent />
      }
    </div>
  );
};

const SecondComponent = () => {
  useEffect(() => {
    console.log("created second component");
  }, [])
  return <div>
    Sourabh
  </div>
}

export default CleanupFunction;
