import { Budget } from "./components/Budget/Budget";
import { Expenses } from "./components/Expenses/Expenses";
import { Form } from "./components/Form/Form";
import { Container } from "./styles";

export const App = () => {
  return (
    <Container>
      <Budget />
      <Expenses />
      <Form />
    </Container>
  );
};
