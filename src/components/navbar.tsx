import "./component.css";
import Select from "../assets/Select.svg";
import SelectDown from "../assets/SelectDown.svg";
import Logo from "../assets/Logo.svg";
import Tray from "../assets/Tray.svg";
import { useState } from "react";
import { cartCurrency } from "../redux/data";
import { Currency } from "../types";
import CartModal from "./cartModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { changeCurrency, openCart } from "../redux/cartSlice";
import { getSymbol } from "../utils/symbol";
import { cartTotal } from "../utils/total";

function NavBar(): JSX.Element {
  const { cart, currency} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const [active, setActive] = useState<string>("Women");
  const [switcher, setSwitcher] = useState<boolean>(false);
  const [switcherActive, setSwitcherActive] = useState<string>("USD");
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const handleCurrencySwitch = (data: Currency) => {
    dispatch(changeCurrency(data.name))
    setSwitcherActive(data.name)
    // setSwitcher(!switcher)
  }

  const handleCart = () => {
    if(cart.length > 0) {
      setIsCartOpen(true);
      dispatch(openCart(true))
    }
    
    return;
  }

  const total = cartTotal().totalQuantity
  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="navbar__left">
          <a className={active === "Women" ? "active" : ""} onClick={() => setActive("Women")}>Women</a>
          <a className={active === "Men" ? "active" : ""} onClick={() => setActive("Men")}>Men</a>
          <a className={active === "Kids" ? "active" : ""} onClick={() => setActive("Kids")}>Kids</a>
        </div>

        <div>
          <img alt="item" src={Logo} />
        </div>

        <div className="navbar__right">
          <div className="navbar__right-divider">
            <p className="navbar__right-currency">{getSymbol(currency)}</p>
              <div className="navbar__notification__container">
                {switcher ? (
                  <img alt="item" src={SelectDown} onClick={() => setSwitcher(!switcher)}/> 
                ) : ( 
                  <img alt="item" src={Select} onClick={() => setSwitcher(!switcher)}/>
                )}

                {switcher && (
                  <div className="navbar__currency__switcher">
                    {cartCurrency.map((data, index) => (
                      <div
                        key={index}
                        className={switcherActive === data.name ? "currency__switcher-on" : "currency__switcher-off"}
                        onClick={() => handleCurrencySwitch(data)}
                      >
                        <p>{data.symbol} {data.name}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>          
          </div>
          <div className="navbar__notification__container">
            <div onClick={handleCart}>
              {cart.length > 0 && <span className="navbar__badge">{total}</span>}
              <img alt="item" src={Tray} />
            </div>
          </div>          
        </div>

        {isCartOpen && <CartModal setIsCartOpen={setIsCartOpen}/>}  
      </div>
    </div>
  );
}

export default NavBar;