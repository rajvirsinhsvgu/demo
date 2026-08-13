import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// import React, { useRef, useState } from "react";

// function Addcart() {
//   const [quantity, setQuantity] = useState(0);
//   const inputRef = useRef();

//   function addcarthandle() {
//     setQuantity(Number(inputRef.current.value));
//   }

//   return (
//     <div>
//       <img
//         style={{ height: "200px", width: "300px" }}
//         src="https://images.unsplash.com/photo-1763891378295-5d9bd5c48745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTd8ZW58MHx8MHx8fDA%3D"
//         alt="iPhone"
//       />

//       <br />

//       <input
//         type="number"
//         ref={inputRef}
//         placeholder="Enter quantity"
//       />

//       <p>Quantity: {quantity}</p>

//       <button onClick={addcarthandle}>
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default Addcart;