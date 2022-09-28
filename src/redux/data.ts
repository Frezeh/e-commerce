import ProductA from "../assets/ProductA.svg";
import ProductB from "../assets/ProductB.svg";
import ProductC from "../assets/ProductC.svg";
import ProductD from "../assets/ProductD.svg";
import { CurrencyList, ProductListType } from "../types";

export const ProductList: ProductListType = [
  {
    id: 0,
    image: ProductD,
    name: "Apollo Running Short",
    price: 50,
    quantity: 0,
    size: ["XS", "S", "M", "L"],
    color: ["gray", "black", "orange", "green", "blue"]
  },
  {
    id: 1,
    image: ProductB,
    name: "Apollo Running Short",
    price: 50,
    quantity: 0,
    size: ["XS", "S", "L"],
    color: ["black", "green", "blue"]
  },
  {
    id: 2,
    image: ProductC,
    name: "Apollo Running Short",
    price: 50,
    quantity: 0,
    outOfStock: true,
    size: ["XS", "S", "M"],
    color: ["gray", "black", "orange", "green"]
  },
  {
    id: 3,
    image: ProductA,
    name: "Apollo Running Short",
    price: 50,
    quantity: 0,
    shadow: true,
    size: ["XS", "S"],
    color: ["gray", "black", "orange"]
  },
  {
    id: 4,
    image: ProductD,
    name: "Apollo Running Short",
    price: 50,
    quantity: 0,
    size: ["S", "M", "L"],
    color: ["gray", "black", "blue"]
  },
  {
    id: 5,
    image: ProductC,
    name: "Apollo Running Short",
    price: 50,
    quantity: 0,
    size: ["XS", "S", "M", "L"],
    color: ["gray", "black", "orange", "green", "blue"]
  },
];

export const cartCurrency: CurrencyList = [
  {
    name: "USD",
    symbol: "$",
  },
  {
    name: "EUR",
    symbol: "€",
  },
  {
    name: "JPY",
    symbol: "¥",
  },
];
