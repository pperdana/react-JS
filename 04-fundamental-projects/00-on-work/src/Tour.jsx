import { useState } from "react";
import styled from "styled-components";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  return (
    <SingleTour>
      <img src={image} alt={name} className="tour-img" />
      <div className="info-container">
        <h3 className="tour-title">{name}</h3>
        <p className="info">
          {isReadMore ? `${info.slice(0, 300)}...` : info}
          <button
            className="btn info-btn"
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? "read more" : "show less"}
          </button>
        </p>
        {/* <span className="price">{price}</span> */}
        <button className="btn remove-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </div>
    </SingleTour>
  );
};

export default Tour;

const SingleTour = styled.div`
  background-color: #fff;
  width: 352px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;

  .tour-img {
    width: 352px;
    height: 320px;
    object-fit: cover;
  }

  .info-container {
    padding: 3.2rem 2.4rem;

    .tour-title {
      font-size: 2rem;

      font-weight: 500;
      margin-bottom: 1.4rem;
    }

    .info {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: left;

      color: #64748b;
      margin-bottom: 2.3rem;
    }
  }
`;
