import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

const ArrowBtn = ({ decIdx, incIdx }) => {
  return (
    <ArrowBtnBox>
      <FaChevronLeft className="chevron left-btn" onClick={decIdx} />
      <FaChevronRight className="chevron right-btn" onClick={incIdx} />
    </ArrowBtnBox>
  );
};

export default ArrowBtn;

const ArrowBtnBox = styled.div`
  margin-bottom: 2.5rem;

  .chevron {
    width: 20px;
    height: 20px;
    margin: 8px;
    cursor: pointer;

    color: #3c3799;
    transition: all 0.3s;
  }

  .chevron:hover {
    color: rgba(83, 78, 187, 0.8);
  }
`;
