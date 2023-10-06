import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../contexts/AppContext/AppContext";

const data = [
  {
    id: 1,
    title: "Cơ sở số 1",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "Cơ sở số 2",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "Cơ sở số 3",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const { setSelectList } = useContext(AppContext);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-100 row align-items-center justify-content-center" >
      <div className="col">
        <img
          src={data[currentSlide].image}
          alt={data[currentSlide].image}
          style={{
            width: '100%',
            height: 700
          }}
        />
      </div>

      <div className="col align-items-center justify-content-center d-none d-md-block">
        <div className=" d-flex align-items-center justify-content-center flex-column fs-2 fw-blod mb-3">
          {data[currentSlide].title}
          <button className="bg-my-primary text-white w-50 d-flex align-items-center justify-content-center fs-3 border-0"
            style={{
              height: 35
            }}
            onClick={() => {
              setSelectList([]);
              navigate("/table");
            }}>
            Đặt bàn ngay
          </button>
        </div>
      </div>

    </div>
  );
};

export default Slider;
