import React, { useContext, useEffect, useState } from "react";
import Main from "../components/Main";
import AppContext from "../contexts/AppContext/AppContext";
import { TableDetailModal } from "../modals/TableDetailModal";

const Table = () => {
  const { tableList } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <Main>
      <div className="container text-white h-100">
        <div className="row row-cols-4">
          {tableList.map((item, index) => {
            return (
              <div key={index} className="col p-4 ">
                <button
                  type="button"
                  className="bg-my-primary border-0 ratio ratio-1x1 d-flex align-items-center justify-content-center "
                  onClick={handleShow}
                >
                  A {item}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <TableDetailModal
      show={show}
      handleClose={handleClose}
      />
    </Main>
  );
};

export default Table;
