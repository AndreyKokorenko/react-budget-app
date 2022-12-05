import { useForm, SubmitHandler } from "react-hook-form";
import { v4 } from "uuid";
import { useBudgetContext } from "../../context/BudgetContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { IExpense } from "../../context/ExpensesContext/types";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { Input, StyledForm, Errors } from "./styles";

export const Form = () => {
  const { budget } = useBudgetContext();
  const { newExpense } = useExpensesContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IExpense>();

  const onSubmit: SubmitHandler<IExpense> = ({ name, price }) => {
    if (budget > 0) {
      newExpense({ name, price, id: v4() });
      reset();
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title lable="Add Expense" />
      <Input
        placeholder="enter name ..."
        type="text"
        {...register("name", {
          required: "Please enter product name!",
          maxLength: { value: 30, message: "Max 30 symbols" },
          minLength: { value: 3, message: "Min 3 symbols" },
        })}
      />
      {errors.name && <Errors>{errors.name.message}</Errors>}
      <Input
        placeholder="enter cost ..."
        type="number"
        {...register("price", {
          required: "Please enter the price of the product!",
          maxLength: { value: 10, message: "Max 10 symbols" },
          minLength: { value: 1, message: "Min 1 symbols" },
          valueAsNumber: true,
        })}
      />
      {errors.price && <Errors>{errors.price.message}</Errors>}
      <Button type={"submit"} label={"Done"} />
    </StyledForm>
  );
};
