import SingleItem from "./SingleItem";
import { useFetchTasks } from "./reactQueryCustomHook";

const Items = ({ items }) => {
  const { data, isLoading, isError } = useFetchTasks();

  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  }

  if (isError) {
    return <p style={{ marginTop: "1rem" }}>There was error...</p>;
  }

  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
