import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const user = false;
  return (
    <div className="text-my-color-navbar p-4 d-flex align-items-center border-bottom text-uppercase border-warning-subtle position-relative"
      style={{
        height: 50
      }}
    >

      <div className="p-4 d-flex justify-content-start align-items-center flex-fill d-none d-md-block">
        <div className="d-flex justify-content-center align-items-center gap-4">
          <span href="/">Homepage</span>
          <span href="/menu">Menu</span>
          <span href="/">Contact</span>
        </div>

      </div>

      <div className="fs-3 fw-bold p-4 d-flex flex-fill justify-content-md-center align-items-center">
        <span>Brother Restaurant</span>
      </div>

      {/* MOBILE MENU */}
      <div className="d-block d-md-none d-lg-none d-xl-none">
        <Menu />
      </div>

      <div className="d-none d-md-block  flex-fill p-4 d-flex justify-content-end align-items-center">
        <div className="d-flex justify-content-end align-items-center flex-fill gap-4"

        >
          <div className="d-flex align-items-center gap-2 cursor-pointer px-1 rounded-1"
            style={{
              backgroundColor: '#FCDAB4'
            }}>
            <img src="/phone.png" alt="phone.png" width={20} height={20} />
            <span>123 456 78</span>
          </div>
          {!user ? (
            <span href="/login">Login</span>
          ) : (
            <span href="/orders">Orders</span>
          )}
          <CartIcon />
        </div>
      </div>

    </div>
  );
};

export default Navbar;
