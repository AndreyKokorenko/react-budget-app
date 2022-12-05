import { createContext, useContext, useState } from "react";
import { IBudget, IBudgetContext, IBudgetContextProviderProps } from "./types";

const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);

const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
    budget: 0,
    setNewBudget: (newBudget) => {
      setBudgetContext((context) => ({
        ...context,
        budget: newBudget,
      }));
    },
  }));

  return budgetContext;
};

export const useBudgetContext = () => useContext(BudgetContext);

export const BudgetContextProvider = ({ children }: IBudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};
