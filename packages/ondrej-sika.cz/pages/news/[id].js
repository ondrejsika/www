import React from "react";
import news_list from "@app/ondrej-sika.cz/data/news.yml";
import Article from "@app/ondrejsika-theme/layouts/Article";

let news_id_map = {};
news_list.map((element, i) => {
  news_id_map[element.id] = i;
});
import twitter_recommendation_file from "@app/data/training/recommendations/twitter_recommendation.yml";
import { TwitterTweetEmbed } from "react-twitter-embed";

let Page = props => {
  let news = news_list[news_id_map[props.post_id]];
  return (
    <Article
      hideNewsletter
      title={news.title}
      markdown={news.content}
      after={
        news.twitter_recommendations && (
          <>
            <h4 className="mt-5">Doporučení z Twitteru</h4>
            <div className="card-columns">
              {twitter_recommendation_file.map((rec, i) => {
                if (!news.twitter_recommendations.includes(rec.id)) return;
                return (
                  <div key={i} className="card" style={{ border: "none" }}>
                    <TwitterTweetEmbed
                      tweetId={rec.tweet_id}
                      options={{ conversation: "none" }}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )
      }
    />
  );
};

Page.getInitialProps = async function(context) {
  return { post_id: context.query.id };
};

export default Page;
