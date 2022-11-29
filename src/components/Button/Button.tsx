import { Children, ReactNode } from "react";
import { StyledButton } from "./styles";

interface IProps {
  children: ReactNode;
}

export const Button = (props: IProps) => {
  return <StyledButton>{props.children}</StyledButton>;
};
