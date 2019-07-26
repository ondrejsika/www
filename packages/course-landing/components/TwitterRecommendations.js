import { TwitterTweetEmbed } from "react-twitter-embed";
import StaticDB from "@app/common/staticdb";

import twitter_recommendation_file from "@app/data/training/recommendations/twitter_recommendation.yml";

function get_by_id(id) {
  let db = new StaticDB();
  db.add("recommendation", twitter_recommendation_file);
  db.setCursor("recommendation");
  db.filter("id", id);
  return db.get()[0];
}

export default props => {
  return (
    <div className="container-flex mb-4 row">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <TwitterTweetEmbed
          tweetId={get_by_id(props.rec1).tweet_id}
          options={{ conversation: "none" }}
        />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <TwitterTweetEmbed
          tweetId={get_by_id(props.rec2).tweet_id}
          options={{ conversation: "none" }}
        />
      </div>
    </div>
  );
};
