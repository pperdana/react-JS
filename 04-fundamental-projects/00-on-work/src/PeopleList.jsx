import Person from "./Person";

const PeopleList = ({ people }) => {
  return (
    <div className="people-container">
      {people.map((person) => {
        return <Person {...person} />;
      })}
    </div>
  );
};

export default PeopleList;
