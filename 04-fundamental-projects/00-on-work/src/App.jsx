import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import styled from "styled-components";

import Text from "./Text";
import ArrowBtn from "./ArrowBtn";

import data from "./data";

const App = () => {
  const [idx, setIdx] = useState(0);
  const [people, setPeople] = useState(data);

  const { image, job, name, text } = people[idx];
  console.log(`Current Id state: ${idx}`);

  const incIdx = () => {
    let newIdx = checkIdx(idx + 1);
    setIdx(newIdx);
  };

  const decIdx = () => {
    let newIdx = checkIdx(idx - 1);
    setIdx(newIdx);
  };

  const handleSurprise = () => {
    let newIdx = Math.floor(Math.random() * 4);
    if (newIdx === idx) {
      newIdx += 1;
      newIdx = checkIdx(newIdx);
    }
    setIdx(newIdx);
  };

  const checkIdx = (newIdx) => {
    if (newIdx === data.length) {
      return 0;
    }
    if (newIdx < 0) {
      return 3;
    }
    return newIdx;
  };

  return (
    <Main>
      <Container className="container">
        <ImageBox>
          <img src={image} alt={name} className="img" />
          <div className="quote-box">
            <FaQuoteRight className="quote-icon" />
          </div>
        </ImageBox>

        <Text name={name} job={job} text={text} />
        <ArrowBtn decIdx={decIdx} incIdx={incIdx} />

        <button className="btn surprise-btn" onClick={handleSurprise}>
          surprise me
        </button>
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
  width: 60rem;
  padding: 2.4rem 3.6rem;
  text-align: center;

  background: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;

  transition: all 0.5s;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  .surprise-btn {
    padding: 5px 12px;

    border: 2px solid #c1beff;
    background: #c1beff;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    letter-spacing: 1px;
    color: #645cff;

    transition: all 0.3s;
  }

  .surprise-btn:hover {
    color: #c1beff;
    background: #3c3799;
    border: 2px solid #3c3799;
  }
`;

const ImageBox = styled.div`
  margin-bottom: 1.6rem;
  z-index: 99;

  position: relative;

  &::before {
    content: "";
    display: block;
    border-radius: 50%;
    position: absolute;
    top: 46.8%;
    left: 51.5%;
    transform: translate(-50%, -50%);

    width: 150px;
    height: 150px;

    background-color: #645cff;
    z-index: -2;
  }

  .img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }

  .quote-box {
    width: 40px;
    height: 40px;

    display: inline-block;
    position: absolute;
    top: 17%;
    left: 40%;
    transform: translate(-50%, -50%);

    padding: 1.2rem;

    border-radius: 50%;
    background-color: #645cff;

    .quote-icon {
      width: 16px;
      height: 16px;
      color: #fff;
    }
  }
`;
