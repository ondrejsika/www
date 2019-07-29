import React from "react";
import References from "./References";

import recommendations from "@app/data/training/recommendations/recommendations.yaml";

let recommendation_id_map = {};
recommendations.map((element, i) => {
  recommendation_id_map[element.id] = i;
});

class Recommendation extends React.Component {
  render() {
    let recommendation = recommendations[recommendation_id_map[this.props.id]];
    if (recommendation == undefined) {
      throw new Error(
        `There is no recommendation with id "${this.props.id}" in file "@app/data/training/recommendations/recommendations.yaml"`
      );
    }
    let img = require(`@app/data/training/recommendations/` +
      recommendation.photo);
    return (
      <References
        imgRefer={img}
        nameRefer={recommendation.name}
        position={recommendation.company}
        reference={recommendation.text[this.props.lang]}
      />
    );
  }
}

export default Recommendation;
