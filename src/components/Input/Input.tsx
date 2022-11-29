import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IProps {
  type: string;
  placeholder: string;
  //   value: string;
  //   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: IProps) => {
  return <StyledInput {...props} />;
};
