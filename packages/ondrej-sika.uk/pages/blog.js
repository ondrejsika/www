import LectureImg from "@app/ondrejsika-theme/components/LectureImg";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import TextWithImg from "@app/ondrejsika-theme/components/TextWithImg";
import StatisticBar from "@app/ondrejsika-theme/components/StatisticBar";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";

import Link from "next/link";

import Head from "next/head";

let site = {
  lang: "cs"
};

let style = {
  fontSize: "1.4em",
  fontWeight: "bold"
};

import posts from "@app/ondrej-sika.cz/data/blog-posts.yaml";

class Blog extends React.Component {
  render() {
    return (
      <div>
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
                <Link as={`${post.url}`} href={`/blog-post?post_id=${post.id}`}>
                  <a style={{ color: "black" }}>
                    <h3 className="pt-4 bold">{post.title}</h3>
                  </a>
                </Link>
                <p>{post.date}</p>
                <p className="pb-4">
                  {post.perex}{" "}
                  <Link
                    as={`${post.url}`}
                    href={`/blog-post?post_id=${post.id}`}
                  >
                    <a>číst dále</a>
                  </Link>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Blog;
