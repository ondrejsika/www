const TextWithImg = props => (
  <div>
    <h3 className="pt-4 pb-2" id="about-me">
      {props.TextWithImgHeader}
    </h3>
    <div className="row">
      <div className="col-lg-8 col-md-6">
        <p>{props.children}</p>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-9 col-9">
        <img src={props.img} className="img-fluid img-size-90" />
      </div>
    </div>
  </div>
);

export default TextWithImg;
