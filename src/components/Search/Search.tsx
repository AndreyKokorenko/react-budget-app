import { ChangeEvent } from "react";
import { StyledSearch } from "./styles";

interface IProps {
  type: string;
  placeholder: string;
//   value: string;
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = (props: IProps) => {
	return <StyledSearch {...props} />;
};
