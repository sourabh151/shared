import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
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
    // const intId = setInterval(()=>{
    //   console.log("hello world");
    // },1000)
    // return ()=>{
    //   clearInterval(intId);
    // }
    const someFunc = () => {
      console.log("someFunc");
    }
    window.addEventListener("scroll", (e) => {
      return ()=>{
        window.removeEventListener("scroll");
      }
    })
  }, [])
  return <div>
    Sourabh
  </div>
}

export default CleanupFunction;
