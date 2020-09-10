import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Microsoft/COOP/17_06_2020/V209073725_IN_PC_Microsoft_COOP_refreshing_Baneers_1500x200_2.jpg"
          alt=""
        />
        <div className="checkout__title">
          <h2>Your Shopping Basket</h2>
          {/* Basket Item*/}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
