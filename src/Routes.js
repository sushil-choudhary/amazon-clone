import React from 'react'
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import HomePay from "./components/amazonpay/home/HomePay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import Orders from "./components/orders/Orders";
import Footer from "./components/footer/Footer";
import Signup from "./components/signup/Signup";
import DeliveryAddress from "./components/deliveryAddress/DeliveryAddress";
import Payment from "./components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
    "pk_test_51HSPy9HRXBpduiiE9oYCxdscBlNbUsS7OXrw4hfexywycxYBeUtLq7t0u3uwetkIxHEOMMhRzkcEbafGypmaukqf00xByBT0jX"
  );

function Routes() {
    return (
      <>
        <Router>
          <div className="app">
            <Switch>
              <Route path="/orders">
                <Header />
                <Orders />
              </Route>

              <Route path="/signup">
                <Signup />
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <Route path="/checkout">
                <Header />
                <Checkout />
              </Route>

              <Route path="/amazonpay">
                <HomePay />
              </Route>

              <Route path="/payment">
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </Route>

              <Route path="/shipping">
                <Header />
                <DeliveryAddress />
              </Route>

              <Route path="/">
                <Header />
                <Home />
                <Footer />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
}

export default Routes
