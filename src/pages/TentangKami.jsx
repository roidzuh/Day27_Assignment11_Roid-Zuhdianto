import Header from "../components/Header";
import Main from "../components/Main";
import styled from "styled-components";
import Footer from "../components/Footer";
import About from "../components/About";
import { aboutData, branchesData } from "../data/getData";
import Branches from "../components/Branches";

const StyledTen = styled.div`
  font-family: "Montserrat", sans-serif;
`;

const TentangKami = () => {
  return (
    <StyledTen>
      <Header />
      <Main>
        <About aboutData={aboutData} />
        <Branches branchesData={branchesData} />
      </Main>
      <Footer />
    </StyledTen>
  );
};

export default TentangKami;
