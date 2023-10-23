import styled from "styled-components";
import { posts } from "../../../../data/posts/posts";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostViewContainer = styled.div`
  margin: 0px;
  padding: 16px 48px 16px 48px;
  min-height: 100vh;
  width: 100%;
`;

function PostView() {
  const { post } = useParams();
  const [current, setCurrent] = useState("");
  useEffect(() => {
    if (post) {
      fetch(posts[post])
        .then((response) => response.text())
        .then((text) => {
          setCurrent(text);
        });
    }
  }, []);

  return (
    <PostViewContainer>
      <Markdown>{current}</Markdown>
    </PostViewContainer>
  );
}

export default PostView;
