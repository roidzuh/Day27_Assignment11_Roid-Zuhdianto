// Button.js
import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid #4caf50;
  background-color: #4caf50;
  color: #fff;
  border-radius: 10px;
  padding: 12px 20px;
  margin-top: 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover,
  &:active {
    background-color: #000;
  }


  }
`;

const Button = ({ text, className, onClick, type = "button" }) => {
  return (
    <StyledButton className={className} onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};

export default Button;
