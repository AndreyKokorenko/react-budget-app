import styled from "styled-components";

const StyledSearch = styled.input`
  width: 335px;
  height: 50px;
  margin: 30px auto 30px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 15px 0 16px 20px;
  ::placeholder {
    color: #999999;
    font-weight: 400;
    font-size: 16px;
  }
`;

export { StyledSearch };
