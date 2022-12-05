import { ReactNode } from "react";

interface IExpensesContextProviderProps {
  children: ReactNode;
}

interface IExpense {
  id: string;
  name: string;
  price: number;
}

interface IExpensesContext {
  expenses: IExpense[];
  newExpense: (expense: IExpense) => void;
  removeExpenseItem: (id: string) => void;
}

export type { IExpensesContext, IExpense, IExpensesContextProviderProps };
