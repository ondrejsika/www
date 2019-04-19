import React from 'react'
import References from './References'

import recommendations from '../../../data/training/recommendations/recommendations.yaml'

let recommendation_id_map = {}
recommendations.map((element, i) => {
  recommendation_id_map[element.id] = i
})

class Recommendation extends React.Component {
  render() {
    let recommendation = recommendations[recommendation_id_map[this.props.id]]
    let img = require(`../../../data/training/recommendations/`+recommendation.photo)
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

export default Recommendation

