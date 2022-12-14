import { useBudgetContext, useCurrencyContext, useExpensesContext } from "../../context";
import { StyledRemaining, Title } from "./styles";

export const Remaining = () => {
  const { curentCurrency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const remaining = budget - expenses.reduce((total, { price }) => total + price, 0);
  const isOverspending = remaining >= 0;

  return (
    <StyledRemaining $isOverspending={isOverspending}>
      <Title>
        {isOverspending
          ? `Remaining: ${curentCurrency.value}${remaining}`
          : `Overspending by: ${curentCurrency.value}${Math.abs(remaining)}`}
      </Title>
    </StyledRemaining>
  );
};
