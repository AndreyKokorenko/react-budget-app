import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IProps {
  type: "number";
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const AddBudgeInput = (props: IProps) => {
  return <StyledInput {...props} />;
};
