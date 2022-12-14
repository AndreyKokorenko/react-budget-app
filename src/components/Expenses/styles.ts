import styled from "styled-components";

const StyledExpenses = styled.div`
  display: flex;
  flex-direction: column;

  height: 300px;
`;

const EmptyLine = styled.ul`
  text-align: center;

  margin: 80px 0 80px 0;

  font-weight: 400;
  font-size: 20px;
`;

export { StyledExpenses, EmptyLine };
