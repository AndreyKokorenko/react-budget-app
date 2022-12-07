import styled from "styled-components";

const StyledRemaining = styled.div<{ $isOverspending: boolean }>`
  display: flex;
  align-items: center;

  height: 100px;
  margin: 20px auto 0;

  border-radius: 10px;
  background: ${({ $isOverspending }) => ($isOverspending ? "#FF0000" : "#ccd5ff")};
`;

const Title = styled.p`
  padding: 0 0 0 20px;

  font-weight: 500;
  font-size: 20px;
`;

export { StyledRemaining, Title };
