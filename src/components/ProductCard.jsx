import React from 'react'
import CBAR from '../assets/CBAR.png'
// import URL from '../assets/'
import './card.css'

const ProductCard = ({ data }) => {
  let url='../assets/'
  return (
    <div className='container'>
    <div div className="flexParent">
      {data.map((item,index) => (
        <div className="col-sm-3" key={index}>
          <div className="product-card">
            {/* <img src={`${url}${item.product_name}.png`} alt="image" /> */}
            <img src={`images/${item.product_name}.png`}  />
            <p className="product-name">{item.product_name}</p>
            
          </div>
        </div>))}

    </div>

    </div>


  )
}
export default ProductCard