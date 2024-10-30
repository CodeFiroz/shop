import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../app/CartSlice';

const Products = () => {

    const {id} = useParams();

    const [products, setProducts] = useState({});

    const fetchProducts = async ()=>{
        try{
          const response = await fetch('https://fakestoreapi.com/products/'+id);
          const product = await response.json();
          setProducts(product);
          console.log(product)
        }
        catch(error){
          console.log(error);
        }
       }
        
       const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cartItem); 


  const AddIntoCart = (id) => {
    // Check if the item already exists in the cart
    const exists = cart.some(item => item.id === id); // Assuming each item has an 'id' property

    if (!exists) {
      dispatch(addTocart({ id })); // Pass an object if your payload requires more than just the ID
      alert("Item added to cart");
    } else {
      alert("Already in cart");
    }
  };

       useEffect(()=>{
        fetchProducts()
       }, [])
        
  return (
    <>
     <div className="page-title">
        <h1>Products</h1>
        <p>Checkout your cart items below</p>
      </div>


<div className="container">

<div className="product-container">



           <div className="product-img">
    <img src={products.image} alt="" />
</div>
<div className="product-info">
    <h3>{products.category}</h3>
    <h1>{products.title}</h1>
    <h2>$ {products.price}</h2>
    <p>
        {products.description}
    </p>

    

<div className="buttons">
        
    <button onClick={() => AddIntoCart(products.id)}>Add to Cart</button>
</div>

</div>



</div>

</div>

    </>
)
}

export default Products