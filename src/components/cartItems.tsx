import "./component.css";
import { useState } from "react";
import { SingleProductListType } from "../types";

export function CartItemsLeft() {}

function CartItems(props: SingleProductListType): JSX.Element {
  const [selectSize, setSelectSize] = useState<string>("S");
  const [selectColor, setSelectColor] = useState<string>("black");

  return (
    <>
      <p className="cart__items__product-name-lg">{props.name}</p>

      <div>
        <p className="cart__items__product-size-lg">Size:</p>
        <div className="cart__items__size">
          {props.size &&
            props.size.map((size: string, index: number) => (
              <div
                key={index}
                className={
                  size === selectSize
                    ? "cart__items__size__lg-s"
                    : "cart__items__size__lg-xs"
                }
                onClick={() => setSelectSize(size)}
              >
                <p>{size}</p>
              </div>
            ))}
        </div>

        <div>
          <p className="cart__items__product-size-lg">Color:</p>
          <div className="cart__items__size">
            {props.color &&
              props.color.map((color: string, index: number) => (
                <div
                  key={index}
                  className={
                    color === selectColor
                      ? "cart__items__color__lg-s"
                      : "cart__items__color__lg-xs"
                  }
                  onClick={() => setSelectColor(color)}
                >
                  <div
                    className="cart__items__color__lg"
                    style={{ background: color }}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItems;
