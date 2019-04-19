const ThreeCol = (props) => (
  <div className="container-flex mb-4">
    <div className="card p-3">
      <h3>{props.header}</h3>
      <div className="d-flex flex-row row">
        <div className="col-lg-4 col-md-4 col-sm-12 karta1">
          {props.col1}
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 karta1">
          {props.col2}
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          {props.col3}
        </div>
      </div>
    </div>
  </div>
)

export default ThreeCol
