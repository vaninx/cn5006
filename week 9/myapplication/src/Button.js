import './App.css';
import './Calculator.css';
import React from 'react';

// Create our Button component as a functional component
const Button = (props) => {
  return (
    <button 
      className="ButtonStyle" value={props.label} onClick={props.ClickHandle}> {props.label} </button>
  );
};

export default Button;
