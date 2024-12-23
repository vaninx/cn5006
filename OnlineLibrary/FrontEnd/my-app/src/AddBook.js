import React, { useState } from "react";
import axios from 'axios';
import './style.css';

export default function Book_Form() {
  let url= "http://localhost:5000/" 
  const [state, setState] = useState({
    booktitle: "",
    author: "",
    format: "",
    Topic:"",
    PubYear: 1990,
  });

 
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const OnSubmit=(e) =>
  {
  
   e.preventDefault();
   const bookdata={
           booktitle:state.booktitle,
           PubYear:state.PubYear,
           author:state.author,
           Topic:state.Topic,
           format:state.format

   }
   
   axios.post(url+"addbooks", bookdata)
   .then(res => console.log(res.data));
   }
  return (
    <div style={{marginTop: 10}}>
      <h3>Add Book</h3>
      <form onSubmit={OnSubmit} method="Post">
        <div className="form-group"> 
          <label>Book Title: </label>
          <input  className="form-control"
            type="text" name="booktitle"
            value={state.booktitle}
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Book Authors: </label>
          <input  className="form-control"
            name="author"value={state.author}
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>
            Pick Book Genre :{" "}
            <select className="form-control"
            name="Topic" 
            value={state.Topic}
            onChange={handleChange}>
            <option value="Fiction ">Dystopian</option>
            <option value="Romance" >Romance</option>
            <option value="Classic">Classic</option>
            <option value="Non Fiction">Horror</option>
            <option value="Engineering">Adventure</option>
          </select>
          </label>
        </div>
        <div className="form-group">
        <label>Format: </label>
        <div className="form-check form-check-inline">
          <input className="form-check-label"
            type="radio" name="format" value="Hard Copy"
            checked={state.format === "Hard Copy"}
            onChange={handleChange} />
         <label className="form-check-label"> Hard Copy </label>
         </div>
         <div className="form-check form-check-inline">
         <input className="form-check-label"
            type="radio"name="format" value="Electronic Copy"
            checked={state.format === "Electronic Copy"}
            onChange={handleChange}
          />
         <label className="form-check-label"> Electronic Copy</label>
        </div>
        </div>  
        <div>
        <label>
          Publication Year (between 1980 and 2025):
          <input
            type="range"name="PubYear"
            min="1980"max="2025" value={state.PubYear}
            onChange={handleChange} />
        </label>
        </div>
        
        <div className="form-group">
        <center>
            <input type="submit" value="Add this book" className="btn btn-primary" />
        </center>                   
        </div>
                
      </form>
      
    </div>
  );
 
}


