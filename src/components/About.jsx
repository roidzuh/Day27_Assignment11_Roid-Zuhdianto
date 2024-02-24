import styled from "styled-components";

const AboutUsSection = styled.section`
  margin-bottom: 11rem;
  text-align: center;

  h2 {
    font-family: "Playfair Display", serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 2rem;

    span {
      color: #4caf50;
    }
  }

  .about-content {
    max-width: 80%;
    margin: auto;
    text-align: justify;
  }

  h3 {
    color: #2a2a2a;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  p {
    color: #5f5f5f;
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.9rem;
    }

    .about-content {
      max-width: 90%;
    }
  }
`;

const About = ({ aboutData }) => {
  return (
    <AboutUsSection data-aos="fade-up">
      <h2>
        Tentang <span>Kami</span>
      </h2>
      <div className="about-content">
        {aboutData.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </AboutUsSection>
  );
};

export default About;
