import React from 'react'

import recommendations from '@app/data/training/recommendations/recommendations.yaml'

let recommendation_id_map = {}
recommendations.map((element, i) => {
  recommendation_id_map[element.id] = i
})

class References extends React.Component {
  render() {
    return (
      <div className="container">
        <div className=' mb-4 mt-4 border'>
          {
            this.props.ids.map((id, i) => {
              let recommendation = recommendations[recommendation_id_map[id]]
              if (recommendation == undefined){
                throw new Error(`There is no recommendation with id "${this.props.id}" in file "@app/data/training/recommendations/recommendations.yaml"`)
              }
              let img = require(`@app/data/training/recommendations/`+recommendation.photo)
              return (
                <div key={i}>
                  {
                    (() => {
                      if (i > 0) {
                        return <hr />
                      }
                    })()
                  }
                  <div className='row p-3'>
                    <div className='col-1 pt-2 d-none d-lg-block d-xl-block'>
                      <img src={img} className='img-fluid rounded-circle' />
                    </div>
                    <div className='col-3'>
                      <h4 className='pt-2'><b>{recommendation.name}</b></h4>
                      <p className='mb-1'><b>{recommendation.role[this.props.lang]}</b></p>
                      <p className='text-secondary'>{recommendation.date[this.props.lang]}</p>
                    </div>
                    <div className='col-lg-8 col-md-9 col-sm-9 col-9 pt-2'>
                      <p>{recommendation.text[this.props.lang]}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default References
