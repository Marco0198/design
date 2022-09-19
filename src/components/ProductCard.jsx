import React from 'react'
import './card.css'
const ProductCard = ({ data }) => {
  return (
    <div div className="flexParent">
      {data.map((item,index) => (
        <div className="col-sm-3" key={index}>
          <div className="product-card">
            <p className="product-name">{item.product_name}</p>
          </div>
        </div>))}

    </div>




  )
}
export default ProductCard