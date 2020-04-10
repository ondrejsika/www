import React from "react";
import news_list from "@app/ondrej-sika.cz/data/news.yml";
import Article from "@app/ondrejsika-theme/layouts/Article";

let news_id_map = {};
news_list.map((element, i) => {
  news_id_map[element.id] = i;
});

let Page = props => {
  let news = news_list[news_id_map[props.post_id]];
  return <Article hideNewsletter title={news.title} markdown={news.content} />;
};

Page.getInitialProps = async function(context) {
  return { post_id: context.query.id };
};

export default Page;
