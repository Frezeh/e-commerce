import "./cart.css";
import { useSelector } from "react-redux";
import { usePaystackPayment } from 'react-paystack';

import CartModalBody from "../../components/cartModalBody";
import { cartTotal } from "../../utils/total";
import { RootState } from "../../redux/store";
import { PaystackPayment } from "../../hooks/paystack";

function Cart(): JSX.Element {
  const { currency } = useSelector((state: RootState) => state);
  const { config, onSuccess, onClose } = PaystackPayment()
  const initializePayment = usePaystackPayment(config);

  return (
    <div className="cart__container">
      <p className="cart__header">Cart</p>
      <CartModalBody size="large" />
      
      <div className="cart__bottom">
        <p>
          Tax 21%: <strong>{`${(cartTotal().totalPrice * 0.21).toLocaleString("en-US", {
              style: "currency",
              currency,
            })}`}</strong>
        </p>
        <p>
          Quantity: <strong>{`${cartTotal().totalQuantity}`}</strong>
        </p>
        <p>
          Total: <strong>{`${cartTotal().totalPrice.toLocaleString("en-US", {
              style: "currency",
              currency,
            })}`}</strong>
        </p>
        <div className="cart__bottom__button" onClick={() => initializePayment(onSuccess as any, onClose)}>
          <p>Order</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
