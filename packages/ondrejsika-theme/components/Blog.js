import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import Head from "next/head";
import Link from "next/link";

const Blog = props => {
  return (
    <div>
      <Head>
        <title>Blog - Ondrej Sika</title>
      </Head>
      <MainBar header={`Blog ${props.header_suffix || ""}`}></MainBar>

      <div className="container">
        {props.posts.map((post, i) => {
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
                    return (
                      <span key={i}>
                        <Link href={`/blog/tag/${tag}`}>
                          <a>#{tag}</a>
                        </Link>{" "}
                      </span>
                    );
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
    </div>
  );
};

export default Blog;
