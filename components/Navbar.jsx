import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities, cartI } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="element logo">
        <Link href="/">Instruments Bazaar</Link>
      </p>

      {/* <p className=" catalog">
        <Link href="/catalog">Browse Catalog</Link>
      </p> */}

      <button
        type="button"
        className="element cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>

    //     <>
    //       <header
    //         // className={cx("header", {
    //         //   "is-overlay": isTransparent,
    //         //   "is-white": isTransparent && !meganav.isOpen && observerIsVisible,
    //         //   "has-bg": !observerIsVisible,
    //         // })}
    //       >

    // <div className="header--outer">
    //     <div className="header--inner">
    //       <div className="header--content">
    //       <div className="logo">
    //       Logo
    //       </div>

    //       </div>
    //     </div>
    // </div>

    //       </header>
    //     </>
  );



  
  
};



export default Navbar;
