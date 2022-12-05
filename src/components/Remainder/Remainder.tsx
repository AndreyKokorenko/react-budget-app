import { ReactNode } from "react";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { StyledRemainder, Title } from "./styles";

export const Remainder = () => {
  const { curentCurrency } = useCurrencyContext();
  return (
    <StyledRemainder>
      <Title>Remaining: {curentCurrency.value}</Title>
    </StyledRemainder>
  );
};
