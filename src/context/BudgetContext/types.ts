import { ReactNode } from "react";

export interface IBudgetContextProviderProps {
  children: ReactNode;
}

export interface IBudget {
  label: string;
  value: number;
}

export interface IBudgetContext {
  budget: number;
  setNewBudget: (value: number) => void;
}
