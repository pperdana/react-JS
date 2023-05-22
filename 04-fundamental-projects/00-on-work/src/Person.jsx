const Person = ({ image, name, age }) => {
  return (
    <div className="person">
      <img src={image} alt={name} />
      <div className="info">
        <h3>{name}</h3>
        <span>{age} years</span>
      </div>
    </div>
  );
};

export default Person;
