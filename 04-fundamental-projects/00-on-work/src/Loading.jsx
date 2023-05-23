import styled from "styled-components";

const Loading = () => {
  return (
    <Main>
      <Loader />;
    </Main>
  );
};

export default Loading;

const Main = styled.main`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid blue;
  border-bottom: 16px solid blue;

  border-radius: 50%;
  width: 150px;
  height: 150px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
