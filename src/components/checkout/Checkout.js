import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../../StateProvider";
import Subtotal from "../subtotal/Subtotal";
import { Link } from "react-router-dom";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <p>
            <strong>Pay faster for all your shopping needs with </strong>
            <Link to="amazonpay">Amazon Pay balance</Link>
            <br />
            {/* <a href="https://pay.amazon.com/"className="checkout__heading">Amazon Pay balance</a><br />     */}
            Get Instant refund on cancellations | Zero payment failures
          </p>
          <h2 className="checkout__title">Shopping Cart</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
