import React, { useState } from 'react'

function Addcart() {
    const [quantity, setquantity] = useState(0);
    
    function addcarthandle() {

    }
    return (
        <div>
            <img style={{ height: "200px", width: "300px" }} src='https://images.unsplash.com/photo-1763891378295-5d9bd5c48745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTd8ZW58MHx8MHx8fDA%3D' />
            <br />
            <input type='number' />
            <p>{quantity}</p>
            <button onClick={addcarthandle}>Add to cart</button>
        </div>
    )
}

export default Addcart