import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";
import TwitterRecommendations from "@app/course-landing/components/TwitterRecommendations";
import Recommendation from "@app/course-landing/components/Recommendation";
import twitter_recommendation_file from "@app/data/training/recommendations/twitter_recommendation.yml";
import recommendation_file from "@app/data/training/recommendations/recommendations.yaml";

export const TwitterLinkedin = props => (
  <Article title="Doporučení z Twiteru a LinkedInu">
    <div className="row">
      <div className="col-6">
        <p className="mb-5 mt-2 alert alert-success">
          <strong>
            Doporučení z LinkedInu se bohužel nedají vložit do webu jako ty z
            Twitteru. Pokud chcete vidět zdroj, podívejte se na můj LinkedIn
            profil{" "}
            <a href="https://www.linkedin.com/in/ondrejsika/">/in/ondrejsika</a>
            , je tam více než 60 doporučení.
          </strong>
        </p>
        {recommendation_file.map((rec, i) => (
          <div className="mb-3" key={i}>
            <Recommendation
              id={rec.id}
              lang={props.site.lang}
              maxImgSize={90}
            />
            <hr className="mt-3" />
          </div>
        ))}
      </div>
      <div className="col-6">
        {twitter_recommendation_file.map((rec, i) => (
          <TwitterRecommendations key={i} ids={[rec.id]} />
        ))}
      </div>
    </div>
  </Article>
);
export default TwitterLinkedin;
