import styled from "styled-components";

export const MenuSection = styled.section`
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

export const MenuFilters = styled.div`
  text-align: center;
  margin-bottom: 5rem;

  .filter-btn {
    border: 1px solid transparent;
    background-color: transparent;
    color: #4caf50;
    border-radius: 10px;
    padding: 12px 20px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover,
    &.active {
      border: 1px solid #4caf50;
      background-color: #4caf50;
      color: #fff;
    }
  }
`;

export const MenuItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

export const MenuItem = styled.div`
  flex-basis: calc(25% - 3rem);
  text-align: center;
  margin-bottom: 3rem;

  .card {
    position: relative;
    background: #f2f9f2;
    border: 1px solid #f2f2f2;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card-img {
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
      flex-grow: 1;
    }

    .card-body {
      padding: 1rem;
      background: rgba(255, 255, 255, 0.9);
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;

      .card-title {
        font-size: 1.2rem;
        font-weight: 700;
        color: #4caf50;
        margin-bottom: 1rem;
      }

      .card-text {
        font-size: 1rem;
        color: #5f5f5f;
        margin-bottom: 2rem;
      }
    }
  }

  @media (min-width: 993px) {
    flex-basis: calc(33.333% - 2rem);
  }

  @media (max-width: 992px) {
    flex-basis: calc(50% - 2rem);
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;
