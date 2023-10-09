import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../contexts/AppContext/AppContext";
import Carousel from 'react-bootstrap/Carousel';
import RestaurantDetailModal from "../modals/RestaurantDetailModal";

const data = [
  {
    id: 1,
    title: "Cơ sở số 1",
    image: "/slide1.png",
    address: "Hà Nội",
    openClose: "8:00 AM - 11:00 PM",
    reportOrderCount: 2000,
    des: "Nhà hàng 4 màu tươi mát"
  },
  {
    id: 2,
    title: "Cơ sở số 2",
    image: "/slide2.png",
    address: "Hồ Chí Minh",
    openClose: "8:00 AM - 11:00 PM",
    reportOrderCount: 5000,
    des: "Nhà hàng lạnh"
  },
  {
    id: 3,
    title: "Cơ sở số 3",
    image: "/slide3.jpg",
    address: "Kon Tum",
    openClose: "8:00 AM - 11:00 PM",
    reportOrderCount: 1000,
    des: "Nhà hàng nóng"
  },
];

const Slider = () => {
  const navigate = useNavigate();
  const [indexCarousel, setIndexCarousel] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [select, setSelect] = useState({});

  const handleSelect = (selectedIndex) => {
    setIndexCarousel(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={indexCarousel} onSelect={handleSelect} interval={3000}>
        {
          data.map((item, index) => {
            return (
              <Carousel.Item
                key={index}
                interval={3000}
                onClick={(e) => {
                  e.preventDefault();
                  setSelect(item);
                  setModalShow(true);

                }}
              >
                <button className="w-100 border-0">
                  <img
                    src={item.image}
                    alt={item.image}
                    style={{
                      width: '100%',
                      height: 700
                    }}
                  />
                </button>
                < Carousel.Caption >
                  <h3>{item.title}</h3>
                  <p>Địa chỉ: {item.address}.</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })
        }
      </Carousel >
      <RestaurantDetailModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        restaurantModel={select}
      />
    </>
  );
};

export default Slider;
