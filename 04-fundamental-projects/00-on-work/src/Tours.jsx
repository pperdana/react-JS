import styled from "styled-components";

import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <TourList>
      {tours?.map((item) => {
        // console.log(item);
        return <Tour key={item.id} {...item} removeTour={removeTour} />;
      })}
    </TourList>
  );
};

export default Tours;

const TourList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;
`;
