// reusable card component
import React from 'react'
import  './Grocery.css'
const GroceryItem = (props) => {
  console.log('props:',props)
  const{title,imgURL,discount,sellingPrice,mrp}=props
  return (
    <div id='main'>
      <img src={imgURL}/>
      <p>{title}</p>
      <p>{discount}</p>
      <p>{sellingPrice}</p>
      <p>{mrp}</p>
    </div>
  )
};
export default GroceryItem;
