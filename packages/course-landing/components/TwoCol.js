const TwoCol = props => (
  <div className="d-flex flex-row row pt-3">
    <div className="col-lg-6 col-md-6 col-sm-12 karta1">
      <div className="pr-5">{props.col1}</div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="pr-5">{props.col2}</div>
    </div>
  </div>
);

export default TwoCol;
