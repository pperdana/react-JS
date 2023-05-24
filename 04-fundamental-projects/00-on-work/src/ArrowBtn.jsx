import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ArrowBtn = ({ decIdx, incIdx }) => {
  return (
    <div className="arrow-btn-box">
      <FaChevronLeft className="chevron left-btn" onClick={decIdx} />
      <FaChevronRight className="chevron right-btn" onClick={incIdx} />
    </div>
  );
};

export default ArrowBtn;
