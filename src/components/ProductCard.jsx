import React from 'react'
import './card.css'
const ProductCard = props => {
  return (
   
      
        <div className="col-sm-3">
          <div className="product-card">
            <p className="product-name">{props.title}</p>
          </div>
        </div>
     

  )
}
export default ProductCard