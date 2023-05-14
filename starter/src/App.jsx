const url = "https://course-api.com/react-tours-project";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const App = () => {
  const [tourList, setTourList] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchingURL() {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setTourList(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchingURL();
  }, []);

  const handleDelete = (id) => {
    let newTourList = tourList.filter((tour) => tour.id != id);
    setTourList(newTourList);
  };

  const handleRefresh = () => {
    fetchingURL();
  };

  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <Tours
          tours={tourList}
          handleDelete={handleDelete}
          handleRefresh={handleRefresh}
        />
      )}
    </main>
  );
};
export default App;
