import styled from "styled-components";

const ServiceSection = styled.section`
  margin-bottom: 11rem;
  text-align: center;

  h2 {
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 1.5rem;

    span {
      color: #4caf50;
    }
  }
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 5rem;
  border-radius: 50px;
  background: #d8eed9;
  box-shadow: 0px 7px 29px 0px rgba(0, 0, 0, 0.2);
`;

const ServiceCard = styled.div`
  flex-basis: calc(33.333% - 20px);
  text-align: center;

  img {
    width: 100%;
    max-width: 5rem;
    height: auto;
    border-radius: 10px;
  }

  h3 {
    margin: 1rem 0;
    color: #4caf50;
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    color: #5f5f5f;
    font-size: 1rem;
    font-weight: 400;
  }

  @media (max-width: 992px) {
    flex-basis: calc(50% - 20px);
  }

  @media (max-width: 800px) {
    flex-basis: 100%;

    h3 {
      font-size: 1.2em;
    }

    p {
      font-size: 0.9em;
    }
  }
`;

const Services = ({ services }) => {
  return (
    <ServiceSection>
      <h2>
        Pelayanan Pengiriman <span>Terbaik</span> Kami
      </h2>
      <ServiceContainer>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            data-aos={service.id % 2 === 0 ? "fade-down" : "fade-up"}
          >
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </ServiceContainer>
    </ServiceSection>
  );
};

export default Services;
