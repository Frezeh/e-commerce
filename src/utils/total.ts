import { useSelector } from "react-redux";
import { CartType } from "../types";

export const cartTotal = () => {
  const { cart } = useSelector((state: CartType) => state);

  let totalQuantity = 0;
  let totalPrice = 0;

  cart.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return { totalPrice, totalQuantity };
};
