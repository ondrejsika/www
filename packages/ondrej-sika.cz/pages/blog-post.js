import { withRouter } from "next/router";
import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

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
        <Head>
          <title>{post.title} - Ondřej Šika</title>
        </Head>
        <MainBar MainBarHeader={post.title}></MainBar>

        <div className="container pt-4">
          <Markdown source={post.content} />
        </div>
      </div>
    );
  }
}

export default withRouter(BlogPost);
