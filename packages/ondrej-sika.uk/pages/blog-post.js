import React from "react";
import { withRouter } from "next/router";
import CourseBar from "@app/ondrejsika-theme/components/CourseBar";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import TextWithImg from "@app/ondrejsika-theme/components/TextWithImg";
import StatisticBar from "@app/ondrejsika-theme/components/StatisticBar";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

let site = {
  lang: "cs"
};

let style = {
  fontSize: "1.4em",
  fontWeight: "bold"
};

import posts from "@app/ondrej-sika.cz/data/blog-posts.yaml";

let posts_id_map = {};
posts.map((element, i) => {
  posts_id_map[element.id] = i;
});

class BlogPost extends React.Component {
  render() {
    let post = posts[posts_id_map[this.props.router.query.post_id]];
    if (!post) return <></>;
    return (
      <div>
        <MainBar header={post.title}></MainBar>

        <div className="container pt-4">
          <Markdown source={post.content} />
        </div>
      </div>
    );
  }
}

export default withRouter(BlogPost);
