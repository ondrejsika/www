const Price = props => (
  <div>
    <div className="price bg-grey pb-3">
      <div className="container">
        <h2 className="pt-4 pb-2">{props.PriceHeader}</h2>
        <div className="row">
          <div className="col-sm-9 col-12">
            <p className="">{props.children}</p>
          </div>
          <div className="col-sm-3 col-12">
            <div className="btn btn-succes">{props.PriceBtn}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Price;
