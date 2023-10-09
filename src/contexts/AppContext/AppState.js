import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";

const AppState = ({ children }) => {
  const [tableList, setTableList] = useState([]);
  const [selectList, setSelectList] = useState([]);
  const [reservation, setReservation] = useState({});
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    let tables = [];
    for (let index = 0; index < 50; index++) {
      tables.push(index);
    }
    setTableList(tables);

    let restaurants = [];
    for (let index = 0; index < 5; index++) {
      const item = {
        name: `Cơ sở số ${index}`,
        address: `Địa chỉ số ${index}`,
        openTime: "Fri Oct 06 2023 21:10:33",
        closeTime: "Fri Oct 06 2023 21:10:33",
        description: `Nhà hàng ngon số ${index}`,
        images: ["/slide1.png", "/slide2.png", "/slide3.jpg","/slide1.png", "/slide2.png",]
      }
      restaurants.push(item);
    }
    setRestaurants(restaurants);
  }, []);



  return (
    <AppContext.Provider
      value={{
        tableList,
        setTableList,
        selectList,
        setSelectList,
        reservation,
        setReservation,
        restaurants,
        setRestaurants
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
