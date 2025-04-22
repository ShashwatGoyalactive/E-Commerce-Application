import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/product-card'

const Home = () => {

  const addToCartHandler = () => {
    console.log("added");
    
  }
  return (
    <div className="home">
      {/* cover image / background image of the page */}
      <section></section>

      <h1>
        Latest Products
        <Link to={"/search"} className="findmore">
          More
        </Link>
      </h1>

      <main>
        {/* render the product cards here fetched from the database */}
        <ProductCard
          productId="1"
          name="Mackbook"
          photo="https://m.media-amazon.com/images/I/316ArzLeJ2L._SX300_SY300_QL70_FMwebp_.jpg"
          price={100}
          stock={10}
          handler={addToCartHandler}
          key="1"
        />
      </main>
    </div>
  );
}

export default Home