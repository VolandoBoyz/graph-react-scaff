import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 32px;
  margin: 0 16px;
  background: white;
  border: 1px solid black;
  border-radius: 2px; 
  &:hover{
    cursor: pointer;
    color: #a9a9a9;
    border-color: #a9a9a9;
  }
`;

export default Button;
