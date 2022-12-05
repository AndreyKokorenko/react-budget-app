import { useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useInput } from "../../hooks/useInput";
import { AddBudgeInput } from "../AddBudgetInput/AddBudgetInput";
import { EditButton, StyledEntireBudget, Title } from "./styles";

export const EntireBudget = () => {
  const { curentCurrency } = useCurrencyContext();
  const { budget, setNewBudget } = useBudgetContext();
  const [label, setLabel] = useState("Edit");
  const [isEdit, setIsEdit] = useState(false);
  const enteredBudget = useInput();

  const handleGetValue = () => {
    setNewBudget(+enteredBudget.value);
  };

  const renderContent = (): JSX.Element => {
    if (!isEdit) {
      return (
        <Title>
          Budget: {curentCurrency.value}
          {budget}
        </Title>
      );
    }

    return <AddBudgeInput type={"number"} placeholder={"Enter budget ..."} {...enteredBudget} />;
  };

  const handleEnterBudget = () => {
    setLabel(label === "Edit" ? "Save" : "Edit");
    setIsEdit((isEdit) => !isEdit);
    handleGetValue();
  };
  return (
    <StyledEntireBudget>
      {renderContent()}
      <EditButton type="button" onClick={handleEnterBudget}>
        {label}
      </EditButton>
    </StyledEntireBudget>
  );
};
