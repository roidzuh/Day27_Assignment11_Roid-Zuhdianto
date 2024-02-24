import styled from "styled-components";

const MainContainer = styled.main`
  margin: 2rem 5rem;

  }
`;

const Main = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;
