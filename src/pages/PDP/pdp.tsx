import "./pdp.css";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { SingleProductListType } from "../../types";
import CartItems from "../../components/cartItems";
import { addToCart } from "../../redux/cartSlice";
import { RootState } from "../../redux/store";

function Pdp(): JSX.Element {
  const location = useLocation();
  const state: SingleProductListType = location.state;
  const dispatch = useDispatch();
  const { currency } = useSelector((state: RootState) => state);

  return (
    <div className="pdp__container">
      <div className="pdp__left">
        <img alt="item" src={state.image} />
        <img alt="item" src={state.image} />
        <img alt="item" src={state.image} />
      </div>

      <div className="pdp__middle">
        <img alt="item" src={state.image} />
      </div>

      <div className="pdp__right">
        <CartItems {...state}/>

        <div>
          <p className="cart__items__product-size-lg">Price</p>
          <p className="cart__items__product-price-lg">
            {state.price.toLocaleString("en-US", {style: "currency", currency})}
          </p>
        </div>

        <div className="cart__items__add__product" onClick={() => dispatch(addToCart(state))}>
          <p>ADD TO CART</p>
        </div>

        <div className="cart__items__product__description">
          <p>
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pdp;
