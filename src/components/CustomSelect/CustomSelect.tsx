import Select, { SingleValue } from "react-select";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { styles } from "./styles";

interface ISelectProps {
  isSearchable: boolean;
  isMulti: boolean;
}

export const CustomSelect = (props: ISelectProps) => {
  const { currencies, curentCurrency, setNewCurrency } = useCurrencyContext();

  const handleSelect = (option: any) => {
    if (option) {
      setNewCurrency(option);
    }
  };

  return (
    <Select
      options={currencies}
      value={curentCurrency}
      {...props}
      styles={styles}
      onChange={handleSelect}
    />
  );
};
