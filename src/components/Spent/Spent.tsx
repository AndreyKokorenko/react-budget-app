import { ReactNode } from "react";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { StyledSpent, Title } from "./styles";

export const Spent = () => {
  const { curentCurrency } = useCurrencyContext();
  return (
    <StyledSpent>
      <Title>Spent so far: {curentCurrency.value}</Title>
    </StyledSpent>
  );
};
