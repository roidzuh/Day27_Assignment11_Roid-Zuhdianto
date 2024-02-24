import styled from "styled-components";

const BranchesContainer = styled.section`
  margin-bottom: 11rem;
  text-align: center;

  h2 {
    font-family: "Playfair Display", serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 4rem;
    span {
      color: #4caf50;
    }
  }

  .branch-row {
    display: flex;
    align-items: center;
    margin: 2rem 0;
    flex-direction: column-reverse;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;

      &:nth-child(even) {
        flex-direction: row-reverse;
      }

      > div {
        flex: 1;
        &:first-child {
          margin-right: 1rem;
        }
        &:last-child {
          margin-left: 1rem;
        }
      }
    }
  }

  .branch-image-container {
    text-align: center;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      text-align: left;
      margin-bottom: 0;
    }
  }

  .branch-image {
    max-width: 90%;
    max-height: 300px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .branch-name {
    font-family: "Playfair Display", serif;
    font-weight: 600;
    font-size: 1.8rem;
    color: #4caf50;
    margin-top: 2rem;
  }
`;

const Branches = ({ branchesData }) => {
  return (
    <BranchesContainer>
      <h2>
        Cabang <span>Restoran</span>
      </h2>
      {branchesData.map((branch, index) => (
        <div
          key={index}
          className="branch-row"
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="branch-image-container">
            <img
              src={branch.imageUrl}
              className="branch-image"
              alt={`Resto ${index + 1}`}
            />
          </div>
          <div>
            <h3 className="branch-name">
              <span>{branch.location}</span>
            </h3>
          </div>
        </div>
      ))}
    </BranchesContainer>
  );
};

export default Branches;
