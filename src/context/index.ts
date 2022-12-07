import { AppContext } from "./AppContext/AppContext";
import { BudgetContextProvider, useBudgetContext } from "./BudgetContext/BudgetContext";
import { CurrencyContextProvider, useCurrencyContext } from "./CurrencyContext/CurrencyContext";
import { useExpensesContext, ExpensesContextProvider } from "./ExpensesContext/ExpensesContext";
import { IBudgetContextProviderProps, IBudget, IBudgetContext } from "./BudgetContext/types";
import {
  ICurrencyContextProviderProps,
  ICurrency,
  ICurrencyContext,
} from "./CurrencyContext/types";
import { IExpensesContextProviderProps, IExpense, IExpensesContext } from "./ExpensesContext/types";

export {
  AppContext,
  BudgetContextProvider,
  useBudgetContext,
  CurrencyContextProvider,
  useCurrencyContext,
  useExpensesContext,
  ExpensesContextProvider,
};

export type { IBudgetContextProviderProps, IBudget, IBudgetContext };
export type { ICurrencyContextProviderProps, ICurrency, ICurrencyContext };
export type { IExpensesContextProviderProps, IExpense, IExpensesContext };
