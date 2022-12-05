import { CustomSelect } from "../CustomSelect/CustomSelect";
import { EntireBudget } from "../EntireBudget/EntireBudget";
import { Remainder } from "../Remainder/Remainder";
import { Spent } from "../Spent/Spent";
import { Title } from "../Title/Title";
import { HeaderBudget, StyledBudget } from "./styles";

export const Budget = () => {
  return (
    <StyledBudget>
      <HeaderBudget>
        <Title lable="Budget App"/>
        <CustomSelect />
      </HeaderBudget>
      <EntireBudget />
      <Remainder />
      <Spent />
    </StyledBudget>
  );
};
