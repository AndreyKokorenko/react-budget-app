import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IProps{
  type: "text" | "number" | "string";
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const EditBudgeInput = ({ type, placeholder, value, onChange }: IProps) => {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};
