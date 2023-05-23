import { useEffect, useState } from "react";
import styled from "styled-components";

import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (tourId) => {
    const newTours = tours.filter((item) => item.id !== tourId);
    setTours(newTours);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <MainNoTours>
        <h1>No tours left</h1>
        <button className="btn refresh-btn" onClick={() => fetchData()}>
          refresh
        </button>
      </MainNoTours>
    );
  }

  return (
    <Main>
      <Container>
        <h1>Our Tours</h1>
        <div className="divider" />
        <Tours tours={tours} removeTour={removeTour} />
      </Container>
    </Main>
  );
};
export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainNoTours = styled.main`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    text-transform: capitalize;
    margin-bottom: 3.6rem;
    font-weight: 400;
  }
`;

const Container = styled.section`
  padding: 2.4rem 3.2rem;
  text-align: center;

  h1 {
    font-size: 4rem;
    font-weight: 400;
    margin-bottom: 1.6rem;
  }

  .divider {
    display: inline-block;

    width: 11.2rem;
    height: 4px;
    border: 0;
    border-top: 3px solid #10b981;

    margin-bottom: 3.2rem;
  }
`;
