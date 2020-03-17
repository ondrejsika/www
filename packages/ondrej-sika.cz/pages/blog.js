import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import Link from "next/link";

import Head from "next/head";

import posts from "@app/ondrej-sika.cz/data/blog-posts.yaml";

export const Blog = () => (
  <>
    <Head>
      <title>Blog - Ondrej Sika</title>
    </Head>
    <MainBar MainBarHeader="Blog"></MainBar>

    <div className="container">
      {posts.map((post, i) => {
        return (
          <div key={i}>
            {(() => {
              if (i > 0) {
                return <hr className="hr-black" />;
              }
            })()}
            <Link href={`/blog/${post.id}`}>
              <a style={{ color: "black" }}>
                <h3 className="pt-4 bold">{post.title}</h3>
              </a>
            </Link>
            <p>
              {post.date}{" "}
              {post.tags &&
                post.tags.length > 0 &&
                post.tags.map((tag, i) => {
                  return <span key={i}>#{tag} </span>;
                })}
            </p>
            <p className="pb-4">
              {post.perex}{" "}
              <Link href={`/blog/${post.id}`}>
                <a>číst dále</a>
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  </>
);

export default Blog;
