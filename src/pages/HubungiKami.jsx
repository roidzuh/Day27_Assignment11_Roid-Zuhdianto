import Header from "../components/Header";
import Main from "../components/Main";
import styled from "styled-components";
import Footer from "../components/Footer";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";

const StyledHub = styled.div`
  font-family: "Montserrat", sans-serif;
`;

const ContactSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: #d8eed9;
  border-radius: 50px;
  box-shadow: 0px 7px 29px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 10rem;
  overflow: hidden;
`;

const Column = styled.div`
  flex: 50%;

  @media (max-width: 768px) {
    flex: 100%;
  }
`;

const HubungiKami = () => {
  return (
    <StyledHub>
      <Header />
      <Main>
        <ContactSection>
          <Column>
            <Map />
          </Column>
          <Column>
            <ContactForm />
          </Column>
        </ContactSection>
      </Main>
      <Footer />
    </StyledHub>
  );
};

export default HubungiKami;
