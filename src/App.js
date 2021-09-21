import { useQuery } from "react-query";
import { fetchPosts } from "./Services";

function App() {
  const { data, isLoading } = useQuery("posts", fetchPosts);
  console.log(data, isLoading, "app.js");

  return (
    <div className="App">
      {data?.map((values) => (
        <p>{values?.title}</p>
      ))}
    </div>
  );
}

export default App;
