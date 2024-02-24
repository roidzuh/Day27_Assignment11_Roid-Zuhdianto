import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";
import Services from "../components/Services";
import { menuItems, services } from "../data/getData";
import styled from "styled-components";
import Footer from "../components/Footer";

const StyledMenu = styled.div`
  font-family: "Montserrat", sans-serif;
`;

const MenuPage = () => {
  const [itemsToShow, setItemsToShow] = useState(menuItems.length);

  return (
    <StyledMenu>
      <Header />
      <Main>
        <Services services={services} />
        <Menu items={menuItems} itemsToShow={itemsToShow} />
      </Main>
      <Footer />
    </StyledMenu>
  );
};

export default MenuPage;
