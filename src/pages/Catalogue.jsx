import React, { useState, useEffect, useMemo } from 'react'
import './Catalogue.css'
import FsLightbox from 'fslightbox-react';
import Layout from '../components/Layout'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'
const Catalogue = () => {

  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCompleted, setFilterCompleted] = useState("BRACELET");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalTodos, setTotalTodos] = useState(0);
  const todosPerPage = 8;
  const [toggler, setToggler] = useState(false);

  const nPages = Math.ceil(totalTodos / todosPerPage)
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products`)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const todosData = useMemo(() => {
    let computedTodos = todos;

    if (searchTerm) {
      computedTodos = computedTodos.filter(
        todo =>
          todo.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCompleted === "BRACELET") {
      computedTodos = computedTodos.filter(
        todo =>
          filterCompleted === "BRACELET" && todo.product_type === "BRACELET"
      )
    }

    if (filterCompleted === "EARRINGS") {
      computedTodos = computedTodos.filter(
        todo =>
          filterCompleted === "EARRINGS" && todo.product_type === "EARRINGS"
      )
    }
    if (filterCompleted === "NECKLACE") {
      computedTodos = computedTodos.filter( 
        todo =>
          filterCompleted === "NECKLACE" && todo.product_type === "NECKLACE"
      )
    }
    if (filterCompleted === "PENDANT") {
      computedTodos = computedTodos.filter( 
        todo =>
          filterCompleted === "PENDANT" && todo.product_type === "PENDANT"
      )
    }
    if (filterCompleted === "CHARM") {
      computedTodos = computedTodos.filter( 
        todo =>
          filterCompleted === "CHARM" && todo.product_type === "CHARM"
      )
    }



    setTotalTodos(computedTodos.length);
    return computedTodos.slice(
      (currentPage - 1) * todosPerPage,
      (currentPage - 1) * todosPerPage + todosPerPage
    );
  }, [todos, currentPage, searchTerm, filterCompleted]);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log("current", currentPage)
  const resetFilter = () => {
    setSearchTerm("");
    setFilterCompleted("");
    setCurrentPage(1);
  };
  return (
    <>
      <Layout>
        <div className='container'>
          <div className="row mt-5 ">
            <div className="col-sm-2 mb-2">
              <select
                className="form-select"
                value={filterCompleted}
                onChange={(e) => {
                  setFilterCompleted(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option defaultValue=""></option>
                <option value="NECKLACE">NECKLACES</option>
                <option value="PENDANT">PENDANTS</option>
                <option value="BRACELET">BRACELETS</option>
                <option value="EARRINGS">EARRINGS</option>
                <option value="CHARM">CHARMS</option>
              </select>
            </div>
            <div className="col ">
              <input
                type="text"
                className="form-control"
                id="search"
                placeholder="Search Title"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
          <div className="flexParent" >
          <ProductCard data={todosData} />
          </div>
          <div className="float-right m-4">
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>

        </div>
        <>
{/* <button onClick={() => setToggler(!toggler)}>
Toggle Lightbox
</button> */}
<FsLightbox
toggler={toggler}
sources={[
'https://i.imgur.com/fsyrScY.jpg',
'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
]}
/>
</>
        </Layout>

    </>

  )
}

export default Catalogue