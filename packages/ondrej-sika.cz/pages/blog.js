import LectureImgMdLg from "@app/ondrej-sika.cz/components/LectureImgMdLg";
import LectureImgSm from "@app/ondrej-sika.cz/components/LectureImgSm";
import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import TextWithImg from "@app/ondrej-sika.cz/components/TextWithImg";
import StatisticBar from "@app/ondrej-sika.cz/components/StatisticBar";
import CompaniesBar from "@app/ondrej-sika.cz/components/CompaniesBar";
import CompaniesBar1 from "@app/ondrej-sika.cz/static/webglobe-yegon-sq.png";
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
