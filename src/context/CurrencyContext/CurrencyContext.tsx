import { createContext, useContext, useState } from "react";
import { Currency } from "../../config/currency";
import { ICurrencyContext, ICurrencyContextProviderProps } from "./types";

const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(() => ({
    curentCurrency: {
      label: "USD",
      value: Currency.USD,
    },
    currencies: [
      {
        label: "USD",
        value: Currency.USD,
      },
      {
        label: "EUR",
        value: Currency.EUR,
      },
      {
        label: "GBR",
        value: Currency.GBR,
      },
    ],
    setNewCurrency: (curentCurrency) => {
      setCurrencyContext((ctx) => ({ ...ctx, curentCurrency }));
    },
  }));

  return currencyContext;
};

export const useCurrencyContext = () => useContext<ICurrencyContext>(CurrencyContext);

export const CurrencyContextProvider = ({ children }: ICurrencyContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
