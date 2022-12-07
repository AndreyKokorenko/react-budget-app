import styled from "styled-components";

const StyledSearch = styled.input`
  padding: 15px 20px 16px 20px;
  margin: 30px 0 30px 0;

  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  ::placeholder {
    font-weight: 400;
    font-size: 16px;

    color: #999999;
  }
`;

export { StyledSearch };
