import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchPost } from "./Services";

function Post() {
  const { id: postId } = useParams();
  const { data: totalData } = useQuery("posts");
  const { data, isLoading, isFetching } = useQuery(
    ["post", postId],
    () => fetchPost(postId),
    {
      refetchOnWindowFocus: false,
      enabled: postId ? true : false,
    }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isFetching) {
    return <p>isFetching...</p>;
  }

  return (
    <div>
      {console.log(data, "data mADHU")}
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
      <div>
        {totalData?.map((values) => (
          <p key={values?.id}>{values?.title}</p>
        ))}
      </div>
    </div>
  );
}

export default Post;
