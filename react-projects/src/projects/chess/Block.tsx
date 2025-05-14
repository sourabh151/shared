
import { useState } from "react"

function Block() {
  const [position, setPosition] = useState("translateX(0px) translateY(0px)");
  return (
    <div draggable={true} className={"w-5/6 h-5/6 bg-red-800"}
      style={{
        transform: position,
      }}
      onDragStart={() => console.log("start")}
      onDragEnd={(e) => {
        setPosition(`translateX(${e.pageX}px) translateY(${e.pageY}px)`)
      }}
      onDragOver={() => console.log("over")}
    ></div>
  )
}

export default Block
