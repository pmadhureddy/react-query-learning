import axios from "axios";
const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};
const fetchPost = async (id) => {
  console.log(id, "id");
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};
const createPost = async (data) => {
  await axios.post("https://jsonplaceholder.typicode.com/posts", data);
};

export { fetchPosts, createPost, fetchPost };
