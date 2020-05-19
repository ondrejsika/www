import React from "react";
import Blog from "@app/ondrejsika-theme/components/Blog";
import all_posts from "@app/ondrej-sika.cz/data/blog-posts.yaml";
import StaticDB from "@app/common/staticdb";

let BlogPage = props => {
  let db = new StaticDB();
  db.add("posts", all_posts);
  db.setCursor("posts");
  db.filterIn("tags", props.tag_id);
  let posts = db.get();
  return (
    <Blog header_suffix={`#${props.tag_id}`} site={props.site} posts={posts} />
  );
};

BlogPage.getInitialProps = async function(context) {
  return { tag_id: context.query.id };
};

export default BlogPage;
