import axios from "axios";
const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};
const createPost = async (data) => {
  await axios.post("https://jsonplaceholder.typicode.com/posts", data);
  console.log("madhu");
};

export { fetchPosts, createPost };
