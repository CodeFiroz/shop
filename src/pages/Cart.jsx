import React, { useEffect, useState } from 'react';
import { removeFromCart } from '../app/CartSlice';
import { useDispatch } from 'react-redux';

const Cart = () => {

  const dispatch = useDispatch();

  const cartSaves = JSON.parse(localStorage.getItem('cart')) || [];


  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); // State for error handling

  const fetchProducts = async (id) => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/'+id);
      // Check if the response status is OK (200-299 range)
      if (!response.ok) {
        throw new Error(`Failed to fetch product with ID: ${id}`);
      }
      
      
      
      // Parse the response only if it's valid
      const product = await response.json();
      return product;
    } catch (error) {
      console.log(error);
      return null; // Return null if there's an error
    }
  };

  const showCart = async () => {
    try {
      // Fetch all the products in the cart using their IDs
      const fetchedProducts = await Promise.all(cartSaves.map((item)=>
        // console.log(id)
        fetchProducts(item.id)
      ));
      
      // Filter out any null values in case any fetch failed
      const validProducts = fetchedProducts.filter(product => product !== null);

      // Update the state with the fetched products
      setProducts(validProducts);
    } catch (error) {
      console.log('Error fetching products', error);
      setError('Failed to load cart items.');
    }
  };

  const RemoveCart = (id)=>{
    const confirmDelete = confirm("Remove this product from cart");
    if(confirmDelete){
      dispatch(removeFromCart(id  ))
    }
  }

  useEffect(() => {
    if (cartSaves.length > 0) {
      showCart();
    }
  }, [RemoveCart]); // Only run once, on component mount

  return (
    <>
      <div className="page-title">
        <h1>My Cart</h1>
        <p>Checkout your cart items below</p>
      </div>

      <div className="container">
        {error ? (
          <p className="error-message">{error}</p> // Display error message if fetching failed
        ) : products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.image} alt={product.title} />
              <div className="info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <span>$ {product.price}</span>

                <button className='removeBtn' onClick={() => RemoveCart(product.id)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <h2>No products in cart</h2>
        )}
      </div>
    </>
  );
};

export default Cart;
