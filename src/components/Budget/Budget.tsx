import { CustomSelect, EntireBudget, Remaining, Spent, Title } from "..";
import { HeaderBudget, StyledBudget } from "./styles";

export const Budget = () => {
  return (
    <StyledBudget>
      <HeaderBudget>
        <Title lable="Budget App" />
        <CustomSelect />
      </HeaderBudget>
      <EntireBudget />
      <Remaining />
      <Spent />
    </StyledBudget>
  );
};
