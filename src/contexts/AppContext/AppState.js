import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";

const AppState = ({ children }) => {
  const [tableList, setTableList] = useState([]);
  const [selectList, setSelectList] = useState([]);
  const [reservation, setReservation] = useState({});

  useEffect(() => {
    let list = [];
    for (let index = 0; index < 50; index++) {
      list.push(index);
    }
    setTableList(list);
  }, []);



  return (
    <AppContext.Provider
      value={{
        tableList,
        setTableList,
        selectList,
        setSelectList,
        reservation,
        setReservation
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
