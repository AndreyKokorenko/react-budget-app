import { useState } from "react";
import { AddBudgetInput } from "..";
import { useBudgetContext, useCurrencyContext } from "../../context";
import { useInput } from "../../hooks";
import { EditButton, StyledEntireBudget, Title } from "./styles";

export const EntireBudget = () => {
  const { curentCurrency } = useCurrencyContext();
  const { budget, setNewBudget } = useBudgetContext();
  const [label, setLabel] = useState("Edit");
  const [isEdit, setIsEdit] = useState(false);
  const enteredBudget = useInput();

  const handleValue = () => {
    setNewBudget(+enteredBudget.value.slice(0, 9));
  };

  const handleEnterBudget = () => {
    setLabel(label === "Edit" ? "Save" : "Edit");
    setIsEdit((isEdit) => !isEdit);
    handleValue();
  };
  return (
    <StyledEntireBudget>
      {!isEdit ? (
        <Title>
          Budget: {curentCurrency.value}
          {budget}
        </Title>
      ) : (
        <AddBudgetInput type={"number"} placeholder={"Enter budget ..."} {...enteredBudget} />
      )}
      <EditButton type="button" onClick={handleEnterBudget}>
        {label}
      </EditButton>
    </StyledEntireBudget>
  );
};
