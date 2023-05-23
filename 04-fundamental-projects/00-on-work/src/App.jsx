import { useEffect, useState } from "react";
import "./App.scss";

import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (tourId) => {
    const newTours = tours.filter((item) => item.id !== tourId);
    setTours(newTours);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <main className="main main-no-tours">
        <h1>No tours left</h1>
        <button className="btn refresh-btn" onClick={() => fetchData()}>
          refresh
        </button>
      </main>
    );
  }

  return (
    <main className="main">
      <section className="container">
        <h1>Our Tours</h1>
        <div className="divider" />
        <Tours tours={tours} removeTour={removeTour} />
      </section>
    </main>
  );
};
export default App;
