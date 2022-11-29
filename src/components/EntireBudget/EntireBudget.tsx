import { ReactNode } from "react";
import { StyledEntireBudget } from "./styles";

interface IProps {
  children: ReactNode;
}

export const EntireBudget = (props: IProps) => {
  return (
    <StyledEntireBudget>
      <h1>{props.children}</h1>
    </StyledEntireBudget>
  );
};
