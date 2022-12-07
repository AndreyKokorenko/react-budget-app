import { StyledButton } from "./styles";

interface IProps {
  type: "button" | "submit";
  label: string;
}

export const Button = ({type, label}: IProps) => {
  return <StyledButton type={type}>{label}</StyledButton>;
};
