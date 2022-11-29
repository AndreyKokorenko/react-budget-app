import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { EntireBudget } from "../EntireBudget/EntireBudget";
import { Remainder } from "../Remainder/Remainder";
import { Spent } from "../Spent/Spent";
import { Title } from "../Title/Title";
import { HeaderBudget, StyledBudget } from "./styles";

export const Budget = () => {
  const { curentCurrency } = useCurrencyContext();
  return (
    <StyledBudget>
      <HeaderBudget>
        <Title>{"Budget App"}</Title>
        <CustomSelect isSearchable={false} isMulti={false} />
      </HeaderBudget>
      <EntireBudget>
        {"Budget: "}
        {curentCurrency.value}
      </EntireBudget>
      <Remainder>
        {"Remaining: "}
        {curentCurrency.value}
      </Remainder>
      <Spent>
        {"Remaining: "}
        {curentCurrency.value}
      </Spent>
    </StyledBudget>
  );
};
