import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchPosts, createPost } from "./Services";
import "./App.css";

function App() {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { data } = useQuery("posts", fetchPosts, {
    refetchOnWindowFocus: false,
  });
  const { mutate } = useMutation("add post", createPost, {
    retry: 3,
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  return (
    <div className="app">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label style={{ marginBottom: "30px", marginTop: "30px" }}>
          Enter your name:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label style={{ marginBottom: "30px", marginTop: "10px" }}>
          Enter your description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button
          onClick={() => {
            mutate({ id: Date.now(), title, description });
          }}
        >
          Create
        </button>
      </div>

      {data?.map((values) => (
        <p>{values?.title}</p>
      ))}
    </div>
  );
}

export default App;
