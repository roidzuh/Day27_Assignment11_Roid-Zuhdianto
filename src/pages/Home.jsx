import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Services from "../components/Services";
import styled from "styled-components";
import Menu from "../components/Menu";
import Testimonials from "../components/Testimonials";
import { menuItems, services, testimonials } from "../data/getData";
import Footer from "../components/Footer";

const StyledHome = styled.div`
  font-family: "Montserrat", sans-serif;
`;

const Home = () => {
  const [itemsToShow, setItemsToShow] = useState(3);
  return (
    <StyledHome>
      <Header />
      <Main>
        <Hero />
        <Services services={services} />
        <Menu items={menuItems} itemsToShow={itemsToShow} />
        <Testimonials testimonials={testimonials} />
      </Main>
      <Footer />
    </StyledHome>
  );
};

export default Home;
