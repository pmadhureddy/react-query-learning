import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { fetchPosts, createPost } from "./Services";
import "./App.css";

function Posts() {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { data, isError, error } = useQuery(
    "posts",
    () => fetchPosts("https://jsonplaceholder.typicod.com/posts"),
    {
      refetchOnWindowFocus: false,
    }
  );
  const {
    mutate,
    isLoading: postLoading,
    data: postData,
  } = useMutation("add post", createPost, {
    retry: 3,
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });
  console.log(isError, "postData");

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
        <Link to={`/post/${values?.id}`}>
          <p key={values?.id}>{values?.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default Posts;
