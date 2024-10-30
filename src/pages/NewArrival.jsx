import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../components/Card';
const NewArrival = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async ()=>{
     try{
       const response = await fetch('https://fakestoreapi.com/products?limit=20&sort=desc');
       const product = await response.json();
       setProducts(product);
     }
     catch(error){
       console.log(error);
     }
    }
     
   
    useEffect(()=>{
     fetchProducts()
    }, [])

  return (
   <>
        <div className="page-title">
            <h1>New Arrival</h1>
            <p>Our Latest Products</p>
        </div>

        <div className="container">


             
      <div className="card-row">

{
  products.map((products)=>(
    <Card  key={products.id} id={products.id} img={products.image} productID={products.id} title={products.title} price={products.price} category={products.category} />
  ))
}

</div>


        </div>
   </>
  )
}

export default NewArrival