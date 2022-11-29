import { List } from "../List/List";
import { Search } from "../Search/Search";
import { Title } from "../Title/Title";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  return (
    <StyledExpenses>
      <Title>{"Expenses"}</Title>
      <Search type="string" placeholder="search ..." />
      <List />
    </StyledExpenses>
  );
};
