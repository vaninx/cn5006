import { useState } from "react";
import React from "react";
import "./App.css";
import Love from "./Love.png"
import sad from "./sad.png"
import happy from "./happy.png"
import like from "./like.png"

function DisplayImage () {
    const [pic, setPic] = useState(" ");
    const [label, setLabel] = useState(" ");
    const images = {
        love: Love,
        sad: sad,
        happy: happy,
        like: like,
    };

    const handleInputChange = (e) => {
        const keyword = e.target.value.toLowerCase();
        
        setPic(images[keyword] || "");
        setLabel(keyword);
    };

    return(
        <div className="App-header">
              <label>
            Emoji: <input type="text" onChange={handleInputChange}/>
            {pic ? (
                    <img src={pic} alt="Displayed" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                ) : (
                    <p>Image will appear here.</p>
                )}
        </label>
        </div>
      
    )
}

export default DisplayImage