import styled from "styled-components";
import Button from "./Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const FormContainer = styled.div`
  padding: 20px 50px;
  background: #d8eed9;
  border-radius: 20px;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const FormTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 16px;

  span {
    color: #4caf50;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telp, setTelp] = useState("");
  const [subjek, setSubjek] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Pesan Anda telah terkirim!");
    setName("");
    setEmail("");
    setTelp("");
    setSubjek("");
    setMessage("");
  };

  return (
    <FormContainer data-aos="fade-left">
      <FormTitle>
        <span>Hubungi</span> Kami
      </FormTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Nama"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="number"
          name="telp"
          placeholder="No.Telp/Ponsel"
          required
          value={telp}
          onChange={(e) => setTelp(e.target.value)}
        />
        <Input
          type="text"
          name="subjek"
          placeholder="Subjek"
          required
          value={subjek}
          onChange={(e) => setSubjek(e.target.value)}
        />
        <Textarea
          name="message"
          rows="8"
          placeholder="Pesan"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></Textarea>
        <Button text="Kirim Pesan" type="submit" />
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
