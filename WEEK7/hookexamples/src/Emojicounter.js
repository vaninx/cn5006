import React, { useEffect, useState } from "react";
import './App.css';

import Love from "./Love.png"
import sad from "./sad.png"
import happy from "./happy.png"
import like from "./like.png"

function EmojiCounter (props) {
    console.log("pic is ", props.pic)
  const [pic, setPic] = useState(Love);
  const[count, setCount] = useState(0);

  useEffect(() => {
    console.log ("function called",props.pic) 
    if (props.pic === "Love"){
        setPic(Love);
    } else if (props.pic === "like"){
        setPic(like);
    } else if (props.pic === "sad"){
        setPic(sad);
    } else if (props.pic === "happy"){
        setPic(happy)
    }
  }, [props.pic]);

  const ClickHandle = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
        <p>{props.pic}
           <button onClick={ClickHandle}>
              {count}
              <img src={pic} alt="" />
           </button>
        </p>
    </div>

  );
}

export default EmojiCounter