import { ReactNode } from "react";
import { Currency } from "../../types/types";

interface ICurrencyContextProviderProps {
  children: ReactNode;
}

interface ICurrency {
  label: keyof typeof Currency;
  value: Currency;
}
interface ICurrencyContext {
  currencies: ICurrency[];
  curentCurrency: ICurrency;
  setNewCurrency: (option: ICurrency) => void;
}

export type { ICurrencyContextProviderProps, ICurrencyContext, ICurrency };
