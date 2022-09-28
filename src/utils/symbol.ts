import { cartCurrency } from "../redux/data";

export const getSymbol = (name: string) => {
  let symbol;

  for (const data of cartCurrency) {
    if (data.name === name) symbol = data.symbol;
  }

  return symbol;
};
