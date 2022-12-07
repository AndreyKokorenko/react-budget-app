import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IProps {
  type: "text" | "number";
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, placeholder, onChange }: IProps) => {
  return <StyledInput type={type} placeholder={placeholder} onChange={onChange} />;
};
