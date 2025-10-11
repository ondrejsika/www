import React from "react";
import Blog from "@app/ondrejsika-theme/components/Blog";
import all_posts from "@app/ondrej-sika.cz/data/blog-posts.yaml";
import StaticDB from "@app/common/staticdb";

let BlogPage = (props) => {
  let db = new StaticDB();
  db.add("posts", all_posts);
  db.setCursor("posts");
  db.filterIn("tags", props.tag_id);
  let posts = db.get();
  return (
    <Blog header_suffix={`#${props.tag_id}`} site={props.site} posts={posts} />
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      tag_id: context.params.id
    }
  };
}

export async function getStaticPaths() {
  const tags = new Set();
  all_posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => {
        tags.add(tag);
      });
    }
  });

  const paths = Array.from(tags).map((tag) => ({
    params: { id: tag }
  }));

  return {
    paths,
    fallback: false
  };
}

export default BlogPage;
