import styled from "styled-components";

const Person = ({ image, name, age }) => {
  return (
    <PersonContainer>
      <img src={image} alt={name} />
      <div className="info">
        <h3>{name}</h3>
        <span>{age} years</span>
      </div>
    </PersonContainer>
  );
};

const PersonContainer = styled.div`
  display: flex;
  margin-bottom: 2.4rem;

  img {
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 50%;
  }

  .info {
    margin-left: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h3 {
      letter-spacing: 1px;
    }

    span {
      color: #64748b;
    }
  }
`;

export default Person;
