import React, { Component } from 'react';
 
const CatList = (props) => {
  return (
    <div>
      {props.breeds.map(cat => {return(<li>{cat}</li> )})}
    </div>
  )
 }
 export default CatList;
