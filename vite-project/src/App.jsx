import React, { useState } from 'react';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Table Tennis',
      category: 'Table Tennis',
      seller: 'Amazon',
      price: 500,
      Slot: "2:00-3:00",
      image: "./images/TableTennis.jpg"
    },
    {
      id: 2,
      name: 'Football',
      category: 'Football',
      seller: 'Amazon',
      price: 500,
      Slot: "6:00-7:00",
      image: "./images/football.jpg"
    },
    {
      id: 3,
      name: 'Football',
      category: 'Football',
      seller: 'Amazon',
      price: 800,
      Slot: "10:00-11:00",
      image: "./images/football1.jpg"
    },
    {
      id: 4,
      name: 'Basket Ball',
      category: 'Basket Ball',
      seller: 'Amazon',
      price: 1240,
      Slot: "12:00-1:00",
      image: "./images/BasketBall.jpg"
    },
    {
      id: 5,
      name: 'Bad mintionin',
      category: 'Bad mintionin',
      seller: 'Amazon',
      price: 800,
      Slot: "10:00-11:00",
      image: "./images/badmintion.jpg"
    },
    {
      id: 6,
      name: 'chess',
      category: 'chess',
      seller: 'Amazon',
      price: 800,
      Slot: "10:00-11:00",
      image: "./images/chess.jpg"
    },
    {
      id: 7,
      name: 'swiming pool',
      category: 'swiming pool',
      seller: 'Amazon',
      price: 800,
      Slot: "10:00-11:00",
      image: "./images/swimming.jpg"
    },
    {
      id: 8,
      name: 'table tennis',
      category: 'table tennis',
      seller: 'Amazon',
      price: 800,
      Slot: "10:00-11:00",
      image: "./images/tb.jpg"
    },
    {
      id: 9,
      name: 'cricket',
      category: 'cricket',
      seller: 'Amazon',
      price: 900,
      Slot: "7:00-9:00",
      image: "./images/cricket.jpg"
    },{
      id: 10,
      name: 'cricket',
      category: 'cricket',
      seller: 'Amazon',
      price: 1800,
      Slot: "1:00-2:00",
      image: "./images/cricket2.jpg"
    },{
      id: 11,
      name: 'playstation-4',
      category: 'game',
      seller: 'Amazon',
      price: 1600,
      Slot: "3:00-4:00",
      image: "./images/games.jpg"
    }
  ]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const AddToCart=(data)=>{
    console.log(data);
    const newCart=[...cart,{...data,quantity:1}];
    setCart(newCart);
  }
  const handleShow=(val)=>{
    setShowCart(val);

  }

  return (
    <div>
      <Header count={cart.length} handleShow={handleShow} />
{
  showCart ? <Cart cart={cart}/> :

  <ProductList products={products} AddToCart={AddToCart} />

}
      {/* <Cart cart={cart}/> */}
    </div>
  );
}

export default App;
