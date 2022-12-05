import { createContext, useContext, useState } from "react";
import { IExpensesContext, IExpensesContextProviderProps } from "./types";

const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => ({
    expenses: [],
    newExpense: (newExpense) => {
      setExpensesContext((context) => ({
        ...context,
        expenses: [...context.expenses, newExpense],
      }));
    },
    removeExpenseItem: (id) => {
      setExpensesContext((context) => ({
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
