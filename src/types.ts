import { Dispatch, SetStateAction } from "react";

export type Currency = {
  name: string;
  symbol: string;
};

export type CurrencyList = Currency[];

export type SingleProductListType = {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  outOfStock?: boolean;
  shadow?: boolean;
  size?: string[];
  color?: string[];
};

export type ProductListType = SingleProductListType[];

export type CartType = {
  cart: ProductListType;
  currency: string;
  openCart: boolean;
};

export type IsCartOpenProps = {
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
};

export type CartModalBodyProps = {
  size: string;
};

export type PaystackType = {
  message: string;
  redirecturl: string;
  reference: string;
  status: string;
  trans: string;
  transaction: string;
  trxref: string;
};

export type PaystackOnsuccessType = (reference: PaystackType) => void

