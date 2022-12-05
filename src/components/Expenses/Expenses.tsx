import { useState, useEffect } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { IExpense } from "../../context/ExpensesContext/types";
import { useInput } from "../../hooks/useInput";
import { AppendList } from "../AppendList/AppendList";
import { Search } from "../Search/Search";
import { Title } from "../Title/Title";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  const search = useInput();
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState<IExpense[]>([]);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((expense) => expense.name.toLowerCase().includes(search.value.toLowerCase()))
    );
  }, [search.value, expenses]);

  return (
    <StyledExpenses>
      <Title lable="Expenses" />
      <Search {...search} type="search" placeholder="search ..." />
      <AppendList expensesList={filteredExpenses} />
    </StyledExpenses>
  );
};
