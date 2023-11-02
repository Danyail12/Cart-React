import React from "react";
import "../App.css";

const ProductList = ({ products,AddToCart }) => {
  return (
    <div className="flex" style={{padding:"4vmax 4vmax"}}>
      {products.map((product, key) => (
        <div key={key} style={{ width: '50%', margin: '5px auto' }}>
          <div className="product">
            <img src={product.image} alt={product.name}  style={{width:'35%'}}/>
            <h2>{product.name}</h2>
            <h5>{product.category}</h5>
            <h3>{product.seller}</h3>
            <h2>{product.Slot}</h2>
        <p>{product.price}</p>
            <button onClick={() => AddToCart(product)}>Add to Cart</button>
        
          </div>
            <br />
            <br />
            <br />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
