import { ExpensesItem } from "..";
import { IExpense } from "../../context";
import { StyledExpensesList } from "./styles";

interface IProps {
  expensesList: IExpense[];
}

export const ExpensesList = ({ expensesList }: IProps) => {
  return (
    <StyledExpensesList>
      {expensesList.map(({ name, price, id }) => (
        <ExpensesItem name={name} price={price} id={id} key={id} />
      ))}
    </StyledExpensesList>
  );
};
