import React from 'react'

function Login(props) {
    let islogged="Not logged in";
    function checked(){
        islogged="Logged In Successfully...";
        console.log(islogged);
    }
  return (/fjffjf//
    <>
        <input type='text' placeholder='Enter email...'/>
        <input type='text' placeholder='Enter password'/>
        <button onClick={checked}>Login</button>
        <p>{islogged}</p>
        <p>{props.name}</p>
        <p>{props.email}</p>
        <ul>
          {props.hobbies.map((art,index)={
            art[index]
          })}
        </ul>
    </>
  )
}

export default Login