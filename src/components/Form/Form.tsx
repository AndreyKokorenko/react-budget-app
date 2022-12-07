import { useForm, SubmitHandler } from "react-hook-form";
import { v4 } from "uuid";
import { Button, Title } from "..";
import { IExpense, useBudgetContext, useExpensesContext } from "../../context";

import { StyledForm, Errors, Input } from "./styles";

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
          maxLength: { value: 20, message: "Max 20 symbols" },
          minLength: { value: 3, message: "Min 3 symbols" },
        })}
      />
      {errors.name && <Errors>{errors.name.message}</Errors>}
      <Input
        placeholder="enter cost ..."
        type="number"
        {...register("price", {
          required: "Please enter the price of the product!",
          maxLength: { value: 8, message: "Max 8 symbols" },
          minLength: { value: 1, message: "Min 1 symbols" },
        })}
      />
      {errors.price && <Errors>{errors.price.message}</Errors>}
      <Button type={"submit"} label={"Done"} />
    </StyledForm>
  );
};
