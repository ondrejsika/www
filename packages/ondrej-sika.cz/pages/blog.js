import React from "react";
import Blog from "@app/ondrejsika-theme/components/Blog";
import posts from "@app/ondrej-sika.cz/data/blog-posts.yaml";

let BlogPage = (props) => <Blog site={props.site} posts={posts} />;

export default BlogPage;
