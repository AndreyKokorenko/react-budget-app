import { ReactNode } from "react";
import { StyledRemainder } from "./styles";

interface IProps {
  children: ReactNode;
}

export const Remainder = (props: IProps) => {
  return (
    <StyledRemainder>
      <h1>{props.children}</h1>
    </StyledRemainder>
  );
};
