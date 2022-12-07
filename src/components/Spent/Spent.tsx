import { useCurrencyContext, useExpensesContext } from "../../context";
import { StyledSpent, Title } from "./styles";

export const Spent = () => {
  const { curentCurrency } = useCurrencyContext();
  const { expenses } = useExpensesContext();

  const spentSoFar = expenses.reduce((totalExpenses, { price }) => totalExpenses + +price, 0);

  return (
    <StyledSpent>
      <Title>
        Spent so far: {curentCurrency.value}
        {spentSoFar}
      </Title>
    </StyledSpent>
  );
};
