import { useState, useEffect } from "react";
import { AppendList, Search, Title } from "..";
import { IExpense, useExpensesContext } from "../../context";
import { useInput } from "../../hooks";

import { EmptyLine, StyledExpenses } from "./styles";

export const Expenses = () => {
  const search = useInput();
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState<IExpense[]>(expenses);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((expense) => expense.name.toLowerCase().includes(search.value.toLowerCase()))
    );
  }, [search.value, expenses]);

  return (
    <StyledExpenses>
      <Title lable="Expenses" />
      <Search {...search} type="search" placeholder="search ..." />
      {expenses.length ? (
        <AppendList expensesList={filteredExpenses} />
      ) : (
        <EmptyLine>Oooops 🙈</EmptyLine>
      )}
    </StyledExpenses>
  );
};
