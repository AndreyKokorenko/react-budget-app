import { StyledTitle } from "./styles";

interface IProps {
  lable: string;
}

export const Title = ({ lable }: IProps) => {
  return <StyledTitle>{lable}</StyledTitle>;
};
