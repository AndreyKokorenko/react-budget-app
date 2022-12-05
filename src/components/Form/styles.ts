import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 30px 0 0;
  padding: 15px 176px 16px 20px;

  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  ::placeholder {
    color: #999999;
    font-weight: 400;
    font-size: 16px;
  }
`;

const Errors = styled.span`
  margin: 5px 0 0 30px;
  color: red;
`;

export { StyledForm, Input, Errors };
