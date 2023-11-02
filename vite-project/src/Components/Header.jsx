import React from 'react'
import '../App.css'
const Header = (props) => {
  return (
    <div className='flex shopping-cart'>
        <h1 onClick={() => props.handleShow(false)}>shopping cart App</h1>
        <div onClick={() => props.handleShow(true)}>Cart
            <sup>{props.count}</sup>
        </div>



    </div>
  )
}

export default Header