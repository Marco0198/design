import React, { useState, useEffect } from 'react'
import './Catalogue.css'
import RightIcon from '../assets/icon.png'
import LeftIcon from '../assets/icon2.png'
import Layout from '../components/Layout'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import ProductCard from '../components/ProductCard'


const Catalogue = () => {
  const [data, setData] = useState([])
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products')
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {

    fetchData();

  }, [])
  console.log(data)
  return (
    <>
      <Layout>
        <>
          <button className="filter-button btn m-3 mt-4 ">FILTER <FontAwesomeIcon icon={faFilter} /></button>
          <button className="filter-button btn btn  mt-2">CATEGORY </button>
          <img src={LeftIcon} className="float-end mt-3 m-1" alt="left icon" />
          <img src={RightIcon} className="float-end mt-3 ml-2" alt="left icon" />
          <div className="flexParent" >
            {data.map((product, index) => {
              return (
              <>
                <div key={index}><ProductCard title={product.product_name} /></div>
              </>)
            })}
          </div>
        </></Layout>

    </>



  )
}

export default Catalogue