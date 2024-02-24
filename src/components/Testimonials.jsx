import styled from "styled-components";

const TestimonialSection = styled.section`
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

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 1.25rem;
    }
  }
`;

const TestimonialContainer = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

const TestimonialCard = styled.div`
  flex-basis: calc(33.333% - 2rem);
  max-width: calc(33.333% - 2rem);
  background: #f2f9f2;
  color: #4caf50;
  font-size: 1.25rem;
  font-weight: 700;
  opacity: ${(props) => (props.$active ? "100%" : "50%")};
  border-radius: 20px;
  box-shadow: 0px 7px 29px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem;

  p {
    color: #5f5f5f;
  }

  img {
    width: 6.25rem;
    height: 9.375rem;
    border-radius: 100px;
    margin: 1rem;
  }

  h5 {
    font-weight: 700;
  }

  @media (max-width: 992px) {
    flex-basis: 100%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    img {
      width: 5rem;
      height: 7.5rem;
    }

    h5 {
      font-size: 1rem;
    }
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;

    img {
      width: 4rem;
      height: 6rem;
    }

    h5 {
      font-size: 0.9rem;
    }
  }
`;

const Testimonials = ({ testimonials }) => {
  return (
    <TestimonialSection>
      <h2>
        <span>Testimoni</span>
      </h2>
      <TestimonialContainer>
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            data-aos="flip-left"
            $active={testimonial.active}
          >
            <div>
              <p>{testimonial.text}</p>
              <img src={testimonial.image} alt={testimonial.name} />
              <h5>{testimonial.name}</h5>
            </div>
          </TestimonialCard>
        ))}
      </TestimonialContainer>
    </TestimonialSection>
  );
};

export default Testimonials;
