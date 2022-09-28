import "./component.css";
import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import CartModalBody from "./cartModalBody";
import { IsCartOpenProps } from "../types";
import { cartTotal } from "../utils/total";
import { openCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function CartModal(props: IsCartOpenProps): JSX.Element {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    function handleClickOutside (this: Document, e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node) ) {
        props.setIsCartOpen(false);
        dispatch(openCart(false))
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  useEffect(() => {
    const handleEscapeButton = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        props.setIsCartOpen(false);
        dispatch(openCart(false))
      }
    };
    window.addEventListener("keydown", handleEscapeButton);
    return () => window.removeEventListener("keydown", handleEscapeButton);
  }, []);

  return ReactDOM.createPortal(
    <div ref={wrapperRef} className="is__cart__open">
      <p>
        <strong>My Bag</strong>, {cartTotal().totalQuantity} items
      </p>
      <CartModalBody size="small"/>
    </div>,
    document.body
  );
}

export default CartModal;
