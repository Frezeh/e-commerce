import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Category from "./pages/Category/category";
import Pdp from "./pages/PDP/pdp";
import Cart from "./pages/Cart/cart";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App(): JSX.Element {
  const { openCart, cart } = useSelector((state: RootState) => state);

  return (
    <Router>
      <div>
        <NavBar />
        <div className={openCart ? "container__overlay" : ""} />
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/:id" element={<Pdp />} />
          <Route path="/cart" element={cart.length > 0 ? <Cart /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
