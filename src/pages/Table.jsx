import React, { useContext, useEffect, useState } from "react";
import Main from "../components/Main";
import AppContext from "../contexts/AppContext/AppContext";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const { reservation, tableList, selectList, setSelectList } = useContext(AppContext);
  const navigate = useNavigate();
  const handleNext = () => {
    if (selectList.length === 0) {
      return;
    }
    navigate("/reservation");
  };

  const handleChooseTable = (info) => {
    const newListSelect = [...selectList, info];
    setSelectList(newListSelect);
  }

  console.log("Table reservation", reservation);

  return (
    <Main>
      <div className="container text-white h-100">
        <h1>
          Xin Mời chọn bàn
        </h1>
        <div className="row row-cols-4">
          {tableList.map((item, index) => {
            return (
              <div key={index} className="col p-4 ">
                <button
                  type="button"
                  className={selectList.includes(item) ? "bg-my-primary ratio ratio-1x1 d-flex align-items-center justify-content-center border-2":"bg-my-primary ratio ratio-1x1 d-flex align-items-center justify-content-center border-0"}
                  onClick={() => handleChooseTable(item)}
                >
                  A {item}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="position-fixed bottom-0 end-0 z-1 p-4">
        <button type="button" className="bg-my-primary text-center text-white fs-3 p-2 rounded-1 border-0"
          onClick={handleNext}>
          Tiếp theo
        </button>
      </div>
    </Main>
  );
};

export default Table;
