import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GreetingElement from'./myGreetingApp.js';
import GreetingElementwithProp from './mygreetingprop.js';
import AppColor from './AppbackgroundColor.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppColor heading="This is the first element" lbl="Name :" color="green"/>
    <AppColor heading="This is the second element" lbl="Name :" color="blue"/>
    <AppColor heading="This is the third element" lbl="Name :" color="yellow"/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
