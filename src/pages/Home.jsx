import React, { useEffect, useState } from 'react'
import slideImg from '../assets/img/slide.jpg';
import Card from '../components/Card';
import Feature from '../pages/sections/Feature'


const Home = () => {

  const [products, setProducts] = useState([]);

 const fetchProducts = async ()=>{
  try{
    const response = await fetch('https://fakestoreapi.com/products?limit=12');
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

   <img src={slideImg} className='slide-img'/>
   
   <div className="container">

        <div className="section-title">
            <h3>Products</h3>
            <h1>Our Featured Products</h1>
        </div>

      
      <div className="card-row">

        {
          products.map((products)=>(
            <Card  key={products.id} id={products.id} img={products.image} productID={products.id} title={products.title} price={products.price} category={products.category} />
          ))
        }

      </div>

   </div>

        <Feature />

   </>
  )
}

export default Home