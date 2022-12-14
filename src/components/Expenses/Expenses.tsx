import { useState, useEffect } from "react";
import { ExpensesList, Search, Title } from "..";
import { IExpense, useExpensesContext } from "../../context";
import { useDebounce, useInput } from "../../hooks";

import { EmptyLine, StyledExpenses } from "./styles";

export const Expenses = () => {
  const search = useInput();
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState<IExpense[]>(expenses);
  const debouncedValue = useDebounce(search.value, 700);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((expense) =>
        expense.name.toLowerCase().includes(debouncedValue.toLowerCase())
      )
    );
  }, [debouncedValue, expenses]);

  return (
    <StyledExpenses>
      <Title lable="Expenses" />
      <Search type="search" {...search} placeholder="search ..." />
      {filteredExpenses.length ? (
        <ExpensesList expensesList={filteredExpenses} />
      ) : (
        <EmptyLine>Oooops 🙈</EmptyLine>
      )}
    </StyledExpenses>
  );
};
