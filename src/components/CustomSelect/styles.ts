import { StylesConfig } from "react-select";

export const styles: StylesConfig = {
  control: (baseStyles) => ({
    ...baseStyles,
    border: "1px solid #EEEEEE",
    width: "73px",
    height: "30px",
    margin: "0 20px 0 0",
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
