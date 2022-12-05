import styled from "styled-components";

const StyledEntireBudget = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  margin: 30px auto 0;
  background: #7cc6fe;
  border-radius: 10px;
`;

const Title = styled.p`
  padding: 0 0 0 20px;
  font-weight: 500;
  font-size: 20px;
`;

const EditButton = styled.button`
  margin: 0 20px 0 0;
  min-width: 85px;
  padding: 10px 26px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;

  background: #fff;
  border-radius: 10px;

  cursor: pointer;
`;

export { StyledEntireBudget, Title, EditButton };
