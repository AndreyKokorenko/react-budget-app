import { useCurrencyContext, useExpensesContext } from "../../context";
import { Badge, BedgeContainer, Button, NameProduct, StyledExpensesItem } from "./styles";

interface IProps {
  name: string;
  price: number;
  id: string;
}

export const ExpensesItem = ({ name, price, id }: IProps) => {
  const { curentCurrency } = useCurrencyContext();
  const { removeExpenseItem } = useExpensesContext();

  const handleDelete = () => {
    removeExpenseItem(id);
  };

  return (
    <StyledExpensesItem>
      <NameProduct>{name}</NameProduct>
      <BedgeContainer>
        <Badge>
          {curentCurrency.value} {price}
        </Badge>
        <Button type="button" onClick={handleDelete} />
      </BedgeContainer>
    </StyledExpensesItem>
  );
};
