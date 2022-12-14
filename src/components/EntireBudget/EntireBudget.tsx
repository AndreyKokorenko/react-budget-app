import { BudgetInput } from "..";
import { useBudgetContext, useCurrencyContext } from "../../context";
import { useInput, useToggle } from "../../hooks";
import { EditButton, StyledEntireBudget, Title } from "./styles";

export const EntireBudget = () => {
  const inputBudget = useInput();
  const [isBudgetActive, toogleIsBudgetActive] = useToggle(false);

  const { curentCurrency } = useCurrencyContext();
  const { budget, setNewBudget } = useBudgetContext();

  const handleSave = () => {
    setNewBudget(+inputBudget.value);
    toogleIsBudgetActive();
  };

  const handleEdit = () => toogleIsBudgetActive();

  return (
    <StyledEntireBudget>
      {isBudgetActive ? (
        <>
          <BudgetInput {...inputBudget} placeholder="Enter Budget ..." type="number" />
          <EditButton onClick={handleSave}>Save</EditButton>
        </>
      ) : (
        <>
          <Title>
            Budget: {curentCurrency.value}{budget}
          </Title>
          <EditButton onClick={handleEdit}>Edit</EditButton>
        </>
      )}
    </StyledEntireBudget>
  );
};
