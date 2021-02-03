import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = (variant) => {
       // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                  },
        });
    };

    return (
        <div className="product">
          {/*product Image*/}
          <img src={image} alt="" />
              {/*product rating*/}
              <div className="product__rating">
                  {Array(rating)
                    .fill()
                    .map((_, i) => (
                      <p>⭐</p>
                    ))}
              </div>
                  {/*product Info*/}
                  <div className="product__info">
                    <p>{title}</p>
                     <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                      </p>
                  </div> 
                     <button onClick={addToBasket}>Add to Basket</button>     
        </div>
  );
}

export default Product
