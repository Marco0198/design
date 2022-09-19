import React, { useState, useEffect, useMemo } from 'react'
import './Catalogue.css'
import RightIcon from '../assets/icon.png'
import LeftIcon from '../assets/icon2.png'
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

    setTotalTodos(computedTodos.length);

    //Current Page slice
    return computedTodos.slice(
      (currentPage - 1) * todosPerPage,
      (currentPage - 1) * todosPerPage + todosPerPage
    );
  }, [todos, currentPage, searchTerm, filterCompleted]);
  // Change page
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
        <>
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
                <option value="EARRINGS">EARRINGS</option>
                <option value="BRACELET">BRACELET</option>
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

          </div>
          <div >

            <div className="mb-3">
            </div>

            <div ><ProductCard data={todosData} /></div>

          </div>
          <div className="float-right m-5">
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>

        </></Layout>

    </>

  )
}

export default Catalogue