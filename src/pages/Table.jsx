import React, { useContext, useEffect, useState } from "react";
import Main from "../components/Main";
import AppContext from "../contexts/AppContext/AppContext";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const { tableList, selectList, setSelectList } = useContext(AppContext);
  const navigate = useNavigate();
  const handleNext = () => {
    if (selectList.length === 0) {
      return;
    }
    navigate("/reservation");
  };

  const handleChooseTable = (info) => {
    // Kiểm tra trạng thái bàn

    // Thêm/xóa bàn vào danh sách đang chọn
    const filterList = selectList.filter((item) => item !== info);
    let newListSelect = [];
    if (filterList.length === selectList.length) {
      newListSelect = [...selectList, info];
    } else {
      newListSelect = filterList;
    }
    setSelectList(newListSelect);
  }

  return (
    <Main>
      <div className="container h-100">
        <h1 className="mt-2">
          Xin mời chọn bàn
        </h1>
        <div className="row row-cols-4">
          {tableList.map((item, index) => {
            const styleDefault = "bg-my-primary ratio ratio-1x1 d-flex flex-column align-items-center justify-content-center p-3 fs-4";
            const styles = selectList.includes(item) ? `${styleDefault} border-2` : `${styleDefault} border-0`;
            return (
              <div key={index} className="col p-4 ">
                <button
                  type="button"
                  className={styles}
                  onClick={() => handleChooseTable(item)}
                >
                  <img
                    src={item.image}
                    alt={item.image}
                    style={{
                      width: '100%',
                      height: "100%"
                    }}
                  />
                  A {item.index}
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
