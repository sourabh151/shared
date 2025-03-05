import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
const Question = ({title,info}) => {
  const [hide,setHide] = useState(true)
  return <article className="question">
    <header>
      <h4>{title}</h4>
      <button onClick={()=>setHide(!hide)}>
        {hide?<AiOutlinePlus /> : <AiOutlineMinus />}
      </button>
    </header>
    {hide || <p>{info}</p>}
  </article>;
};

export default Question;
