import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Title } from "../Title/Title";
import { StyledForm } from "./styles";

export const Form = () => {
  return (
    <StyledForm>
      <Title>{"Add Expense"}</Title>
      <Input placeholder="enter name ..." type="string" />
      <Input placeholder="enter cost ..." type="number" />
      <Button>{"Done"}</Button>
    </StyledForm>
  );
};
