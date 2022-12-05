import styled from "styled-components";
import close from "../../assets/close.png";

const StyledAppendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: 50px;
  border-bottom: 2px solid #ccd5ff;
`;

const NameProduct = styled.h5`
  padding: 0 0 0 20px;
  font-weight: 400;
  font-size: 16px;
`;

const Button = styled.button`
  width: 15px;
  height: 15px;
  margin: 0 20px 0 0;
  background: url(${close});
`;

const Badge = styled.span`
  font-weight: 400;
  font-size: 12px;
  background: #23c9ff;
  border-radius: 10px;
  color: white;
  padding: 4px 20px 4px 20px;
`;

export { StyledAppendItem, NameProduct, Button, Badge };
