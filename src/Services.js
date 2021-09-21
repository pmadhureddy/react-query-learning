import axios from "axios";
const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(data, "services");
  return data;
};

export { fetchPosts };
