import { IExpense } from "../../context/ExpensesContext/types";
import { AppendItem } from "../AppendItem/AppendItem";
import { EmptyLine, StyledAppendList } from "./styles";

interface IProps {
  expensesList: IExpense[];
}

export const AppendList = ({ expensesList }: IProps) => {
  if (!expensesList.length) {
    return <EmptyLine>Oooops 🙈</EmptyLine>;
  }
  return (
    <StyledAppendList>
      {expensesList.map(({ name, price, id }) => (
        <AppendItem name={name} price={price} id={id} key={id} />
      ))}
    </StyledAppendList>
  );
};
