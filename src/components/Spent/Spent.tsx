import { ReactNode } from "react";
import { StyledSpent } from "./styles";

interface IProps {
  children: ReactNode;
}

export const Spent = (props: IProps) => {
  return (
    <StyledSpent>
      <h1>{props.children}</h1>
    </StyledSpent>
  );
};
