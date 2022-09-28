import "./component.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";

import { RootState } from "../redux/store";
import { decrementQuantity, incrementQuantity, removeItem } from "../redux/cartSlice";
import { cartTotal } from "../utils/total";
import { CartModalBodyProps, SingleProductListType } from "../types";
import { PaystackPayment } from "../hooks/paystack";
import AngleLeft from "../assets/AngleLeft.svg";
import AngleRight from "../assets/AngleRight.svg";

function CartModalBody({ size }: CartModalBodyProps): JSX.Element {
  const { cart, currency } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { config, onSuccess, onClose } = PaystackPayment();
  const initializePayment = usePaystackPayment(config);

  const handleDecrease = (product: SingleProductListType) => {
    if (product.quantity > 1) dispatch(decrementQuantity(product.id));
    else dispatch(removeItem(product.id));
  };

  return (
    <div className="cart__items__container">
      {cart.map((product) => (
        <div key={product.id} className={"cart__items__body__container"}>
        {size === "large" && <div className="cart__divider" />}
        <div className="cart__items__body">
          <div className={size === "large" ? "cart__items__body-left" : ""}>
            <p className={size === "small" ? "cart__items__product-name" : "cart__items__product-name-lg"}>{product.name}</p>

            <p className={size === "small" ? "cart__items__product-price" : "cart__items__product-size-lg"}>
              {product.price.toLocaleString("en-US", {style: "currency", currency})}
            </p>

            <div>
              <p className={size === "small" ? "cart__items__product-size" : "cart__items__product-size-lg"}>Size:</p>
              <div className="cart__items__size">
                  {product.size &&
                    product.size.map((item, index) =>
                      size === "small" ? (
                        <div
                          key={index}
                          className={item === "S" ? "cart__items__size-s" : "cart__items__size-xs"}
                        >
                          <p>{item}</p>
                        </div>
                      ) : (
                        <div
                          key={index}
                          className={item === "S" ? "cart__items__size__lg-s" : "cart__items__size__lg-xs"}
                        >
                          <p>{item}</p>
                        </div>
                      )
                  )}
                </div>

                <p className={size === "small" ? "cart__items__product-size" : "cart__items__product-size-lg"}>Color:</p>
                <div className="cart__items__size">
                  {product.color &&
                    product.color.map((color, index) => (
                      size === "small" ? (
                        <div
                          key={index}
                          className={color === "black" ? "cart__items__color-s" : "cart__items__color-xs"}
                        >
                          <div
                            className="cart__items__color"
                            style={{ background: color }}
                          />
                        </div>
                      ) : (
                        <div
                          key={index}
                          className={color === "black" ? "cart__items__color__lg-s" : "cart__items__color__lg-xs"}
                        >
                        <div
                          className="cart__items__color__lg"
                          style={{ background: color }}
                        />
                      </div>
                    )))}
                </div>
              </div>
            </div>

            <div className="cart__items__body-right">
              <section>
                <div
                  className="cart__items__increase"
                  onClick={() => dispatch(incrementQuantity(product.id))}
                >
                  <p>+</p>
                </div>
                <h4 className="cart__items__product-price">
                  {product.quantity}
                </h4>
                <div
                  className="cart__items__increase"
                  onClick={() => handleDecrease(product)}
                >
                  <p>-</p>
                </div>
              </section>

              <img
                alt="item"
                src={product.image}
                style={{width: "100%", height: "auto", overflow: "hidden"}}
              />
              {size === "large" && (
                <>
                  <div className="cart__items__product__select__left">
                    <img alt="item" src={AngleRight} />
                  </div>
                  <div className="cart__items__product__select__right">
                    <img alt="item" src={AngleLeft} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}

      {size === "small" && (
        <div className="cart__items__total">
          <p>Total</p>
          <p>
            {cartTotal().totalPrice.toLocaleString("en-US", {
              style: "currency",
              currency,
            })}
          </p>
        </div>
      )}

      {size === "small" && (
        <div className="cart__items__total">
          <div
            className="cart__items__view_bag"
            onClick={() => navigate("/cart")}
          >
            <p>View bag</p>
          </div>
          <div
            className="cart__items__ckeck_out"
            onClick={() => initializePayment(onSuccess as any, onClose)}
          >
            <p>CHECK OUT</p>
          </div>
        </div>
      )}

      {size === "large" && <div className="cart__divider" />}
    </div>
  );
}

export default CartModalBody;
