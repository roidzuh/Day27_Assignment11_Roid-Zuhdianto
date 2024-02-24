import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import { Google, Twitter, Facebook, Instagram } from "react-bootstrap-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const FooterContainer = styled.footer`
  background-color: #bee3c0;
  color: #5f5f5f;
  padding: 5rem 1rem;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 0 5rem;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
  text-align: justify;
`;

const H2Footer = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 2.25rem;
  color: #000;

  span {
    color: #4caf50;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  font-size: 2rem;
  color: #5f5f5f;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

const OpenTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const OpenTimeDiv = styled.div`
  display: flex;
  gap: 2rem;
  font-weight: bold;
`;

const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .btn-footer {
    padding: 1rem;
    width: 100%;
    border: none;
    transition: background-color 0.3s;
  }
`;

const NewsletterInput = styled.input`
  text-align: center;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  border: none;
  outline: none;
  width: 100%;
`;

const Copyright = styled.p`
  margin-top: 2.5rem;
  font-size: 0.9rem;
`;

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast(
      "Terimakasih, mulai sekarang anda akan mendapat kan info terkait promo yang menarik dari kami"
    );
    setEmail("");
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo />
          <p>
            Terima kasih telah menemani kami dalam perjalanan kuliner Anda. Kami
            berharap setiap hidangan telah membawa kebahagiaan dan kenangan
            manis. Sampaikan pengalaman Anda, dan jangan lupa kembali untuk
            mencicipi kelezatan baru lainnya. Sampai jumpa di meja makan kami
            lagi!
          </p>
          <SocialIcons data-aos="fade-up">
            <SocialIcon href="#">
              <Google />
            </SocialIcon>
            <SocialIcon href="#">
              <Twitter />
            </SocialIcon>
            <SocialIcon href="#">
              <Facebook />
            </SocialIcon>
            <SocialIcon href="#">
              <Instagram />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>
        <FooterSection>
          <OpenTime>
            <H2Footer>Open Hours</H2Footer>
            <OpenTimeDiv>
              <p>
                Senin - Minggu <br />
              </p>
              <p>9:00 - 20:00</p>
            </OpenTimeDiv>
          </OpenTime>
        </FooterSection>
        <FooterSection>
          <Newsletter>
            <H2Footer>Newsletter</H2Footer>
            <p>Dapatkan informasi dan promo terbaru dari kami</p>
            <form onSubmit={handleSubmit}>
              <NewsletterInput
                type="email"
                placeholder="Enter Email Address"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <Button text="Subscribe" className="btn-footer" type="submit" />
            </form>
          </Newsletter>
        </FooterSection>
      </FooterContent>
      <Copyright>
        copyright ©2023 F<span>OO</span>D - All rights reserved.
      </Copyright>
      <ToastContainer position="top-center" />
    </FooterContainer>
  );
};

export default Footer;
