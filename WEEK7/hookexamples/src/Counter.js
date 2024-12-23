import React from "react";
import "./App.css";
import {useState} from 'react';

function Hook_ControlledButtonState () {
    const [count, setCount] = useState(0);
    const ClickHandle = () => {
        setCount(count + 1);
    };
    
    return(
        <div className="App-header">
            <form>
                <h1>Click counts are {count}</h1>
                <button type="button" onClick={ClickHandle}>Click me {count}</button>
            </form>
        </div>
    );
    
}

export default Hook_ControlledButtonState;