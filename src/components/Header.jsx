import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useState } from "react";

const HeaderStyle = styled.header`
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background: #fff;

  @media (max-width: 920px) {
    justify-content: space-between;
  }
`;

const StyledLine = styled.div`
  width: 90%;
  height: 1px;
  margin: auto;
  background-color: #4caf50;
`;

const BurgerButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 920px) {
    display: block;
  }
`;

const NavContainer = styled.div`
  display: flex;

  @media (max-width: 920px) {
    display: none;
  }
`;

const MobileNavContainer = styled.div`
  display: none;

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Montserrat", sans-serif;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderStyle>
        <Logo />
        <NavContainer>
          <MainNav />
        </NavContainer>
        <BurgerButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "||" : "="}
        </BurgerButton>
      </HeaderStyle>
      {isOpen && (
        <MobileNavContainer>
          <MainNav />
        </MobileNavContainer>
      )}
      <StyledLine />
    </>
  );
};

export default Header;
