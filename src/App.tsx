import { Budget } from "./components/Budget/Budget";
import { Expenses } from "./components/Expenses/Expenses";
import { Form } from "./components/Form/Form";
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
