import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import Markdown from "@app/common/components/Markdown";
import BlogPostFooter from "@app/ondrejsika-theme/components/BlogPostFooter";
import YouTube from "react-youtube";
import BlogBox from "@app/ondrejsika-theme/components/BlogBox";
import Background from "@app/ondrejsika-theme/components/lp/LP-background";
import { Container } from "react-bootstrap";
import Head from "next/head";

import posts from "@app/ondrej-sika.cz/data/blog-posts.yaml";

let posts_id_map = {};
posts.map((element, i) => {
  posts_id_map[element.id] = i;
});

let Post = props => {
  let post = posts[posts_id_map[props.post_id]];

  let trainingButtonLink = null;
  let trainingButtonText = null;

  if (post.ad) {
    trainingButtonLink = "/skoleni/" + post.ad;
    trainingButtonText = {
      git: "Školení Gitu",
      docker: "Školení Dockeru",
      kubernetes: "Školení Kubernetes",
      terraform: "Školení Terraformu",
      react: "Školení Reactu",
      "gitlab-ci": "Školení Gitlab CI",
      rancher: "Školení Rancheru",
      prometheus: "Školení Promethea"
    }[post.ad];
  }

  return (
    <div>
      <Head>
        <title>{post.title} - Ondřej Šika</title>
      </Head>
      <MainBar
        header={post.title}
        text={
          post.tags &&
          post.tags.map((tag, i) => (
            <span key={i} style={{ fontSize: "0.8em" }}>
              #{tag}{" "}
            </span>
          ))
        }
      />
      <Background light_grey style={{ padding: "2em 0" }}>
        <Container>
          <BlogBox className="article">
            {post.youtube && (
              <center>
                <div className="m-3">
                  <YouTube videoId={post.youtube} />
                </div>
              </center>
            )}
            {post.content && <Markdown source={post.content} />}
          </BlogBox>
          <BlogBox>
            {!props.hideFooter && (
              <BlogPostFooter
                trainingButtonText={trainingButtonText}
                trainingButtonLink={trainingButtonLink}
              />
            )}
          </BlogBox>
        </Container>
      </Background>
    </div>
  );
};

Post.getInitialProps = async function(context) {
  return { post_id: context.query.id };
};

export default Post;
