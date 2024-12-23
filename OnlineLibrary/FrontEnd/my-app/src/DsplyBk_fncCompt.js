import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


import axios from 'axios';
import DisplayData from './DisplayData';

export default function FncDisplayBooks() {
    const [Books, setBooks] = useState([]);
    const url ="http://localhost:5000/allbooks/"

    useEffect(()=>{
      axios.get(url)
      .then(res=>{
       setBooks(res.data)    
  })
      .catch(err => {
        console.log("error has occured")
      })
      },[])
    return(
        <div>
         <DisplayData Books={Books}/>
    </div>
    )
    }
