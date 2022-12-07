import { AppendItem } from "..";
import { IExpense } from "../../context";
import { StyledAppendList } from "./styles";

interface IProps {
  expensesList: IExpense[];
}

export const AppendList = ({ expensesList }: IProps) => {
  return (
    <StyledAppendList>
      {expensesList.map(({ name, price, id }) => (
        <AppendItem name={name} price={price} id={id} key={id} />
      ))}
    </StyledAppendList>
  );
};
