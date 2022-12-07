import { Budget, Expenses, Form } from "./components";
import { Wrapper } from "./styles";

export const App = () => {
  return (
    <Wrapper>
      <Budget />
      <Expenses />
      <Form />
    </Wrapper>
  );
};
