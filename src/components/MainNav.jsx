import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navlist = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
`;

const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  color: #000;

  &.active {
    font-weight: bold;
  }

  &.active,
  &:hover {
    color: #4caf50;
  }

  &.cta {
    border: 1px solid #4caf50;
    background-color: #4caf50;
    color: #fff;
    border-radius: 10px;
    padding: 12px 20px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #43a047;
    }
  }
`;

const StyledLi = styled.li`
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const MainNav = () => {
  return (
    <nav>
      <Navlist>
        <StyledLi>
          <StyledNavlink to="/">Home</StyledNavlink>
          <StyledNavlink to="/tentang-kami">Tentang Kami</StyledNavlink>
          <StyledNavlink to="/menu">Menu</StyledNavlink>
          <StyledNavlink to="/hubungi-kami" className="cta">
            Hubungi Kami
          </StyledNavlink>
        </StyledLi>
      </Navlist>
    </nav>
  );
};

export default MainNav;
