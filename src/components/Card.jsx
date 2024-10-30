import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../app/CartSlice';
import { Link } from 'react-router-dom';



const Card = (props) => {
  
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


  return (
    <div key={props.key} className="product-card">
        <div className="pro-img">
            <img src={props.img} alt="" />
        </div>
        <div className="pro-info">
            <span><a href="#">{props.category}</a></span>
            <h4><Link to={'/products/'+props.id} title={props.title}>{props.title}</Link></h4>
            <p>
            $ {props.price}
            </p>
        </div>
        <div className="cart-btn" onClick={() => AddIntoCart(props.productID)}><i className="fi fi-rr-cart-minus"></i></div>
    </div>
  )
}

export default Card