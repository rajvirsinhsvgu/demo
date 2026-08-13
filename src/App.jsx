import { useState } from 'react'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Addcart from './components/Addcart'

function App() {
  const [count, setCount] = useState(0)
const name="rajvir";
const email="rd@gmail.com"
const hobbies=["play","study","trip"]
  return (
    <>
      {/* <Home/> */}
      <Login name={name} email={email} hobbies={hobbies}/>
    {/* <Addcart/> */}
        {/* <Footer/> */}
    </>
  )
}

export default App
