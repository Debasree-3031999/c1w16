// reusable card component
import React from 'react'
import  './Grocery.css'
const GroceryItem = (props) => {
  console.log('props:',props)
  const{id,title,imgURL,discount,sellingPrice,mrp}=props
  return (
    <div id='main'>
      <img src='{imgURL}'/>
      <P>{title}</P>
      <p>{discount}</p>
      <p>{sellingPrice}</p>
      <p>{mrp}</p>
    </div>
  )
};
export default GroceryItem;
