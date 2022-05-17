import { useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";

import FeedInput from "./FeedInput";
import Post from "./Post";

const Feed = ({ ssrPosts }) => {
  const [posts, setPosts] = useState([]);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const responseData = await response.json();
      setPosts(responseData);
      setHandlePost(false);
      setUseSSRPosts(false);
    };

    fetchPosts();
  }, [handlePost]);

  // console.log(posts, handlePost);

  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <FeedInput />
      {/* Posts */}
      {!useSSRPosts
        ? posts.map((post) => <Post key={post._id} post={post} />)
        : ssrPosts.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
};

export default Feed;
