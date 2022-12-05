import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Badge, Button, NameProduct, StyledAppendItem } from "./styles";

interface IProps {
  name: string;
  price: number;
  id: string;
}

export const AppendItem = ({ name, price, id }: IProps) => {
  const { curentCurrency } = useCurrencyContext();
  const { removeExpense } = useExpensesContext();

  const handleRemove = () => {
    removeExpense(id);
  };
  return (
    <StyledAppendItem>
      <NameProduct>{name}</NameProduct>
      <Badge>
        {curentCurrency.value} {price}
      </Badge>
      <Button type="button" onClick={handleRemove} />
    </StyledAppendItem>
  );
};
