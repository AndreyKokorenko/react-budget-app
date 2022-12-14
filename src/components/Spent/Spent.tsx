import { useCurrencyContext, useExpensesContext } from "../../context";
import { StyledSpent, Title } from "./styles";

export const Spent = () => {
  const { curentCurrency } = useCurrencyContext();
  const { expenses } = useExpensesContext();

  const spentSum = expenses.reduce((totalExpenses, { price }) => totalExpenses + +price, 0);

  return (
    <StyledSpent>
      <Title>
        Spent so far: {curentCurrency.value}
        {spentSum}
      </Title>
    </StyledSpent>
  );
};
