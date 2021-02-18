import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

import { Form, FormControl } from "react-bootstrap";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
        />
      </Link>
      <Form className="header__search">
        <FormControl className="header__searchInput" type="text" />
      </Form>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <a href="https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_g_146|m_lgAX6a65c_c386559716760">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </a>
      </div>
      <Link to="/checkout">
        <div className="header__optionBasket">
          <AddShoppingCartIcon className="header__cartIcon" />
          Cart
          <span className="header_optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
