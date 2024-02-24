import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";
import { toast } from "react-toastify";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalDialog = styled.div`
  background-color: #fff;
  border-radius: 0.3rem;
  max-width: 500px;
  width: 100%;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dee2e6;
  padding-bottom: 0.75rem;
`;

export const ModalTitle = styled.h5`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ModalBody = styled.div`
  padding: 1rem 0;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.75rem;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const QuantityInput = styled.input`
  margin-left: 0.5rem;
  width: 60px;
  padding: 0.25rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  font-size: 1rem;
`;

export const PriceInfo = styled.p`
  margin: 0.75rem 0;
  font-size: 1rem;
`;

export const TotalInfo = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;

  .btn {
    margin: 0;
  }
`;

export const QuantityWrapper = styled.div`
  margin-top: 1rem;
`;

const OrderModal = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleOrderClick = () => {
    toast.error(
      "Maaf, website sedang dalam perawatan. Silakan coba lagi nanti."
    );
    onClose();
  };
  return (
    <ModalBackdrop>
      <ModalDialog>
        <ModalHeader>
          <ModalTitle>{item.title}</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <p>{item.description}</p>
          <QuantityWrapper>
            <label htmlFor="quantity">Jumlah:</label>
            <QuantityInput
              type="number"
              id="quantity"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
            />
          </QuantityWrapper>
          <PriceInfo>Harga: {item.price} IDR</PriceInfo>
        </ModalBody>
        <ModalFooter>
          <TotalInfo>Total: {item.price * quantity} IDR</TotalInfo>
          <ButtonGroup>
            <Button text="Close" className="btn" onClick={onClose} />
            <Button
              text="Order Now"
              className="btn"
              onClick={handleOrderClick}
            />
          </ButtonGroup>
        </ModalFooter>
      </ModalDialog>
    </ModalBackdrop>
  );
};

export default OrderModal;
