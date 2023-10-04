import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex align-items-center" >
      <div className="w-50 d-flex align-items-center justify-content-center flex-column">
        <span className="fs-2 fw-blod mb-3">
          {data[currentSlide].title}
        </span>
        <div className="bg-my-primary text-white w-25 d-flex align-items-center justify-content-center fs-3"
        style={{
          height: 35
        }}>Đặt bàn ngay</div>
      </div>
      <div className="w-50 bg-my-primary">
        <img
          src={data[currentSlide].image}
          alt={data[currentSlide].image}
          style={{
            width: '100%',
            height: 541
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
