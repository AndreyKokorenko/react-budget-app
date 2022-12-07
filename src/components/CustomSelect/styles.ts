import { StylesConfig } from "react-select";
import { ICurrency } from "../../context/CurrencyContext/types";

export const styles: StylesConfig<ICurrency> = {
  control: (baseStyles) => ({
    ...baseStyles,
    width: "73px",
    height: "30px",

    border: "1px solid #EEEEEE",
    borderRadius: "5px",
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    textAlign: "center",

    width: "73px",

    border: "1px solid #EEEEEE",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    margin: "auto",

    fontSize: "12px",
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: "0",
  }),
};
