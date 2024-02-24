import styled from "styled-components";

const Brand = styled.a`
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 2.25rem;
  color: #000;
`;
const Span = styled.span`
  color: #4caf50;
`;
const Logo = () => {
  return (
    <Brand>
      F<Span>OO</Span>D
    </Brand>
  );
};

export default Logo;
