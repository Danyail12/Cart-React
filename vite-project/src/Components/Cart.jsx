import React from 'react'
import '../App.css'
const Cart = ({ cart }) => {
  return (
    <div>
      {

        cart.map((cartItem, cartKey) => {
          return (
            <div key={cartKey}>
              <div className='product'>

                <img src={cartItem.image} style={{ width: "10%" }} alt="" srcset="" />


                <span>
                  {cartItem.name}
                </span>
                <span>

                 Rs. {cartItem.price}
                </span>
                
            <button>+</button>
                <span >
              
                   {cartItem.quantity}
                
                </span>
          <button>-</button>
                <span>
                  {cartItem.Slot}
                </span>
                <span>

                 Category: {cartItem.category}
                </span>
              </div>
            </div>
          )
        })
      }

<p>

{
  cart.map(items => items.price).reduce((a, b) => a + b, 0)
}
  </p>
    </div>
  )
}

export default Cart