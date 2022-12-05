import { StylesConfig } from "react-select";
import { ICurrency } from "../../context/CurrencyContext/types";

export const styles: StylesConfig<ICurrency> = {
  control: (baseStyles) => ({
    ...baseStyles,
    border: "1px solid #EEEEEE",
    width: "73px",
    height: "30px",
    borderRadius: "5px",
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    border: "1px solid #EEEEEE",
    width: "73px",
    textAlign: "center",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    fontSize: "12px",
    margin: "auto",
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: "0",
  }),
};
