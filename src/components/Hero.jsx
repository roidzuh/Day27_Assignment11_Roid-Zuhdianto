import styled from "styled-components";
import Button from "./Button";
import { toast } from "react-toastify";

const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 11rem;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 50%;
  margin-bottom: 2rem;

  h1 {
    font-family: "Playfair Display", serif;
    color: #4caf50;
    font-weight: 700;
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    color: #5f5f5f;
  }

  @media (max-width: 992px) {
    max-width: 100%;
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const HeroImage = styled.div`
  max-width: 50%;

  @media (max-width: 992px) {
    max-width: 100%;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Hero = () => {
  const handleOrderClick = () => {
    toast.error(
      "Maaf, website sedang dalam perawatan. Silakan coba lagi nanti."
    );
  };

  return (
    <HeroSection>
      <HeroContent data-aos="fade-right">
        <h1>Surga Rasa: Sehat, Lezat, dan Berkah Tanpa Batas!</h1>
        <p>
          Selamat Datang di Pelukan Kelezatan: Menyajikan Kenikmatan Tanpa Batas
          dari Alam yang Murni.
        </p>
        <Button
          text="Pesan Sekarang"
          className="cta"
          type="button"
          onClick={handleOrderClick}
        />
      </HeroContent>
      <HeroImage data-aos="fade-left">
        <img src="images/hero-img.png" alt="hero image" />
      </HeroImage>
    </HeroSection>
  );
};

export default Hero;
