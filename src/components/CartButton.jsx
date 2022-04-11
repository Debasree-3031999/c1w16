import { useState } from "react";

// keep the add to cart component here
const CartButton = () => {
  const[count, setcount]=useState(0)
  const addcart=()=>{
    setcount(count+1)
  }
    //manage state of the count 
  return <>

  {/* add to cart button */}
  {/* count with - and  + button */}
  <div>
      <button>-</button>
      {/* <p className="count-item">{count}</p> */}
      <button>+</button>
  </div>
  </>;
};
export default CartButton
