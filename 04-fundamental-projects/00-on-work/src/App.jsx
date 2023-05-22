import { useState } from "react";
import styled from "styled-components";

import data from "./data";

import PeopleList from "./PeopleList";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <Main>
      <Container>
        <h1 className="title">{people.length} birthdays today</h1>
        <PeopleList people={people} />
        <Button className="btn" onClick={() => setPeople([])}>
          clear all
        </Button>
      </Container>
    </Main>
  );
};

export default App;

const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.section`
  background-color: #ffffff;
  width: 60rem;
  padding: 2.4rem 3.2rem;

  background: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;

  .title {
    font-weight: 400;
    margin-bottom: 3.2rem;
    text-transform: capitalize;
    letter-spacing: 1px;
  }

  .btn:hover {
    background-color: #a02bb2;
  }
`;

const Button = styled.button`
  display: inline-block;

  font-family: "Arial";
  text-transform: capitalize;
  color: #ffffff;
  letter-spacing: 1px;

  width: 536px;
  height: 27px;
  background-color: #d946ef;
  border: none;
  border-radius: 5px;

  cursor: pointer;
  transition: all 0.3s;
`;
