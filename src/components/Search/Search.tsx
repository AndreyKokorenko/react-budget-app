import { ChangeEvent } from "react";
import { StyledSearch } from "./styles";

interface IProps {
  type: "search";
  placeholder: string;
}

export const Search = (props: IProps) => {
	return <StyledSearch {...props} />;
};
