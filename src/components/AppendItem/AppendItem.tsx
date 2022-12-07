import { useCurrencyContext, useExpensesContext } from "../../context";
import { Badge, BedgeContainer, Button, NameProduct, StyledAppendItem } from "./styles";

interface IProps {
  name: string;
  price: number;
  id: string;
}

export const AppendItem = ({ name, price, id }: IProps) => {
  const { curentCurrency } = useCurrencyContext();
  const { removeExpenseItem } = useExpensesContext();

  const handleRemove = () => {
    removeExpenseItem(id);
  };

  return (
    <StyledAppendItem>
      <NameProduct>{name}</NameProduct>
      <BedgeContainer>
        <Badge>
          {curentCurrency.value} {price}
        </Badge>
        <Button type="button" onClick={handleRemove} />
      </BedgeContainer>
    </StyledAppendItem>
  );
};
