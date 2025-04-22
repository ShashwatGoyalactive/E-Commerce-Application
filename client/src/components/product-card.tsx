import React from 'react'
import { FaPlus } from 'react-icons/fa'

type ProductProps = {
  productId: string
  name: string
  photo : string
  price : number
  stock : number
  handler : () => void
}

const ProductCard =  ({productId, name, photo, price, stock, handler}: ProductProps) => {
  
  const server = "ffewfjgnjg";
 
  return (
    <div className="product-card">
      {/* src={`${server}/${photo}`} */}
      <img  src={photo} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>
      {/* for overlay above the card component with the add to cart button */}
      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default ProductCard