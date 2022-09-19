import React from "react";
//import Data from "./Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className=" container d-flex justify-content-center  mb-5">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="btn-none text-dark p-1 px-3 mx-3 btn h2 text-capitalize"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val.toLowerCase()}s
            </button>
          );
        })}
        {/* <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(Data)}
        >
          All
        </button> */}

        {/* <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterItem("Breakfast")}
        >
          Breakfast
        </button>
        <button
          className="btn-warning text-white p-1 px-2 mx-5"
          onClick={() => filterItem("Lunch")}
        >
          Lunch
        </button>
        <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterItem("Dinner")}
        >
          Dinner
        </button> */}
      </div>
    </>
  );
};

export default Buttons;
