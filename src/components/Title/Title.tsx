import { ReactNode } from "react";
import { StyledTitle } from "./styles";

interface IProps {
	children: ReactNode;
}

export const Title = (props: IProps) => {
  return <StyledTitle>{props.children}</StyledTitle>;
};
