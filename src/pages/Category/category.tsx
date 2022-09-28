import "./category.css";
import Cart from "../../assets/Cart.svg";
import { ProductList } from "../../redux/data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function Category(): JSX.Element {
  const { currency } = useSelector((state: RootState) => state);

  return (
    <div className="container">
      <div className="header">
        <p>Category name</p>
      </div>
      <div className="product">
        {ProductList.map((product) => (
          <div key={product.id} className={product.shadow ? "product__four" : product.outOfStock ? "product__three" : ""}>
          <div className="product__container">
             <Link to={`/${product.id}`} state={product}>
               <img
                alt="item"
                src={product.image}
                style={{ width: 356, height: 338 }}
              />
             </Link>
            <p className="product__name">{product.name}</p>
            <p className="product__price">
              {product.price.toLocaleString("en-US", {
                style: "currency",
                currency,
              })}
            </p>

              {product.outOfStock && (
                <section>
                  <p>OUT OF STOCK</p>
                </section>
              )}

              {product.shadow && (
                <section>
                  <img src={Cart} alt="cart" />
                </section>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
