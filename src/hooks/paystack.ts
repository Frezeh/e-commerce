import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { PaystackType } from "../types";
import { cartTotal } from "../utils/total";

export function PaystackPayment() {
  const amount = cartTotal().totalPrice * 100;
  const dispatch = useDispatch();

  const config = {
    reference: new Date().getTime().toString(),
    email: "ezehfrank87@gmail.com",
    amount,
    publicKey: "pk_test_9759417d7bec2774b69f7da1eba12cfb8759a366",
  };

  const onSuccess = (reference: PaystackType) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    dispatch(clearCart())
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  return {
    config,
    onSuccess,
    onClose,
  };
}
