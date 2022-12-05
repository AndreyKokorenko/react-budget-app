import { createContext, useContext, useState } from "react";
import { IExpensesContext, IExpensesContextProviderProps } from "./types";

const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

const useExpensesContextValue = () => {
  const [expensesContext, setSxpensesContext] = useState<IExpensesContext>(() => ({
    expenses: [],
    newExpense: (newExpense) => {
      setSxpensesContext((context) => ({
        ...context,
        expenses: [...context.expenses, newExpense],
      }));
    },
    removeExpense: (id) => {
      setSxpensesContext((context) => ({
        ...context,
        expenses: context.expenses.filter((expense) => expense.id !== id),
      }));
    },
  }));

  return expensesContext;
};

export const useExpensesContext = () => useContext<IExpensesContext>(ExpensesContext);

export const ExpensesContextProvider = ({ children }: IExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
