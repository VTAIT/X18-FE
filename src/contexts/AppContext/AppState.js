import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";

const AppState = ({ children }) => {
  const [tableList, setTableList] = useState([]);

  useEffect(()=> {
    setTableList([1,2,3,4,5,6,7,8,9,10]);
  },[]);

  return (
    <AppContext.Provider
      value={{
        tableList,
        setTableList
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
