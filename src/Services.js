import axios from "axios";
const fetchPosts = async (api) => {
  console.log(api, "api");
  const { data } = await axios.get(api);
  return data;
};
// const fetchPost = async (id) => {
//   console.log(id, "id");
//   const { data } = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   );
//   return data;
// };
const createPost = async (postData) => {
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    postData
  );
  return data;
};

export { fetchPosts, createPost };
