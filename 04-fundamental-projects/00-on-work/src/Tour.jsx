import { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  return (
    <div className="tour">
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
    </div>
  );
};

export default Tour;
