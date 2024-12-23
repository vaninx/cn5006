import App from "./App";
import './App.css'
import './Calculator.css'
import React from "react";
import Button from "./Button.js";
import {useState} from "react";

function KeyPadComponent(props){
    const [display, setDisplay] = useState(""); // Stores the current input or result
  const [showPicture, setShowPicture] = useState(false); // Controls picture visibility

  // Handles button clicks
  const ClickHandle = (e) => {
    const value = e.target.value;

    // Using 'if-else' statements to check button values
    if (value === "C") {
      setDisplay(""); // Clear the display when 'C' is clicked
    } else if (value === "=") {
      try {
        const result = eval(display); // Evaluate the expression in display
        setDisplay(result.toString());
      } catch (error) {
        setDisplay("Error"); // Display error if eval fails
      }
    } else if (value === "square") {
      const squaredValue = Math.pow(parseFloat(display), 2); // Calculate square
      setDisplay(squaredValue.toString());
    } else if (value === "show me") {
      setShowPicture(!showPicture); // Toggle the picture display
    } else {
      setDisplay(display + value); // Append the value to the display
    }
  };

  return (
    <div className="Calculator">
      <div className="screen-row">
        <input type="text" readOnly value={display} />
      </div>

      {/* Conditional rendering to show/hide the picture */}
      {showPicture && (
        <div className="picture-display">
          <img 
            src="/kittycat.jpeg" 
            alt="Kitty Cat" // Displays the image when 'show me' button is clicked
          />
        </div>
      )}

               <div >
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle}/>
                <Button label="C" ClickHandle={ClickHandle}/> 
                </div>

                <div >
                <Button label="1"  ClickHandle={ClickHandle}/>
                <Button label="2" ClickHandle={ClickHandle}/>
                <Button label="3" ClickHandle={ClickHandle}/>
                <Button label="+" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="4" ClickHandle={ClickHandle}/>
                <Button label="5" ClickHandle={ClickHandle}/>
                <Button label="6" ClickHandle={ClickHandle}/>
                <Button label="-" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="7" ClickHandle={ClickHandle}/>
                <Button label="8" ClickHandle={ClickHandle}/>
                <Button label="9" ClickHandle={ClickHandle}/>
                <Button label="*" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="." ClickHandle={ClickHandle}/>
                <Button label="0" ClickHandle={ClickHandle}/>
                <Button label="=" ClickHandle={ClickHandle}/>
                <Button label="/" ClickHandle={ClickHandle}/>
                </div>
                <div>
                <Button label="show me" ClickHandle={ClickHandle} />
                <Button label="square" ClickHandle={ClickHandle} />
                </div>
                
            </div>
        );
    
}
export default KeyPadComponent;