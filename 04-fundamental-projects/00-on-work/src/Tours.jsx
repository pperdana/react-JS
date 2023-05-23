import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="tours-list">
      {tours?.map((item) => {
        // console.log(item);
        return <Tour key={item.id} {...item} removeTour={removeTour} />;
      })}
    </div>
  );
};

export default Tours;
