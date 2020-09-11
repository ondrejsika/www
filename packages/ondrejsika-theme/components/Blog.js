import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import Head from "next/head";
import Link from "next/link";
import Background from "@app/ondrejsika-theme/components/lp/LP-background";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const BlogBox = styled.div`
  background-color: white;
  padding: 1em 2em;
  margin: 1em 0;
`;

const Blog = props => {
  return (
    <div>
      <Head>
        <title>Blog - Ondrej Sika</title>
      </Head>
      <MainBar header={`Blog ${props.header_suffix || ""}`}></MainBar>
      <Background light_grey style={{ padding: "2em 0" }}>
        <Container>
          {props.posts.map((post, i) => {
            return (
              <BlogBox key={i}>
                <Link href={`/blog/${post.id}`}>
                  <a style={{ color: "black" }}>
                    <h3 className="pt-4 bold">{post.title}</h3>
                  </a>
                </Link>
                <p className="pt-2">
                  {post.date}{" "}
                  {post.tags &&
                    post.tags.length > 0 &&
                    post.tags.map((tag, i) => {
                      return (
                        <span key={i}>
                          <Link href={`/blog/tag/${tag}`}>
                            <a>#{tag}</a>
                          </Link>{" "}
                        </span>
                      );
                    })}
                </p>
                <p className="pb-2 pt-2">
                  {post.perex}{" "}
                  <Link href={`/blog/${post.id}`}>
                    <a>číst dále</a>
                  </Link>
                </p>
              </BlogBox>
            );
          })}
        </Container>
      </Background>
    </div>
  );
};

export default Blog;
