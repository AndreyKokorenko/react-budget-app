import Select, { SingleValue } from "react-select";
import { ICurrency, useCurrencyContext } from "../../context";

import { styles } from "./styles";

export const CustomSelect = () => {
  const { currencies, curentCurrency, setNewCurrency } = useCurrencyContext();

  const handleSelect = (option: SingleValue<ICurrency>) => {
    if (option) {
      setNewCurrency(option);
    }
  };

  return (
    <Select
      options={currencies}
      value={curentCurrency}
      styles={styles}
      onChange={handleSelect}
      isMulti={false}
      isSearchable={false}
    />
  );
};
