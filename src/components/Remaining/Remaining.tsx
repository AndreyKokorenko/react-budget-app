import { useState, useEffect } from "react";
import { useBudgetContext, useCurrencyContext, useExpensesContext } from "../../context";
import { StyledRemaining, Title } from "./styles";

export const Remaining = () => {
  const { curentCurrency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();
  const [overspending, setOverspending] = useState(false);

  const remaining = budget - expenses.reduce((total, { price }) => total + +price, 0);

  useEffect(() => {
    remaining < 0 ? setOverspending(true) : setOverspending(false);
  }, [remaining]);

  return (
    <StyledRemaining $isOverspending={overspending}>
      <Title>
        {overspending ? "Overspending by: " : "Remaining: "}
        {curentCurrency.value}
        {Math.abs(remaining)}
      </Title>
    </StyledRemaining>
  );
};
