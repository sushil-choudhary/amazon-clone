import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import { useSnackbar } from "notistack";
import Button from "@material-ui/core/Button";
import { yellow } from "@material-ui/core/colors/";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: { main: yellow[400] },
  },
});

function Product({ id, title, image, price, rating }) {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (variant) => () => {
    enqueueSnackbar("Added Successfully!", { variant });
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
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          className={classes.margin}
          onClick={addToBasket("success")}
        >
          Add to basket
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default Product;
