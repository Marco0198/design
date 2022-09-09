import React from 'react'
import './Catalogue.css'
import RightIcon from  '../assets/icon.png'
import  LeftIcon  from  '../assets/icon2.png'
import Layout from '../components/Layout'
 import { faFilter} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Catalogue = () => {
    return (
      <>
      <Layout>
      <div className="">
     <button className="filter-button btn m-3 mt-4 ">FILTER <FontAwesomeIcon icon={faFilter }/></button><FontAwesomeIcon icon={"coffee"} />
     <button className="filter-button btn btn  mt-2">CATEGORY </button>
     <FontAwesomeIcon
        className='super-crazy-colors'
        name='rocket'
        size='2x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
     <img src={LeftIcon} className="float-end mt-3 m-1" alt="left icon" />
     <img src={RightIcon} className="float-end mt-3 ml-2" alt="left icon" />
    <div className="">
    <div className="container jutify-containt-center">
      <div className="row">
        <div className="col-sm-3">
          <div className="product-card">
              <p className="product-name">Card title</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-card">
          <p className="product-name">Card title</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-card">
          <p className="product-name">Card title</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-card">
          <p className="product-name">Card title</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="product-card">
              <p className="product-name">Card title</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-card">
          <p className="product-name">Card title</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-card">
          <p className="product-name">Card title</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-card">
          <p className="product-name">Card title</p>
          </div>
        </div>
      </div></div></div>
      
      </div></Layout>
 
      </>

  

    )
}

export default Catalogue