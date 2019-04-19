const CompaniesBar = (props)=> (
  <div>
    <h3 className='pt-4 pb-2'>{props.CompaniesBarHeader}</h3>
      <div className="d-flex row text-center">
        <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
          <img src={props.CompaniesBar1} className="img-fluid bw" alt="default" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
          <img src={props.CompaniesBar2} className="img-fluid bw" alt="default" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
          <img src={props.CompaniesBar3} className="img-fluid bw" alt="default" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
          <img src={props.CompaniesBar4} className="img-fluid bw" alt="default" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
          <img src={props.CompaniesBar5} className="img-fluid bw" alt="default" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
          <img src={props.CompaniesBar6} className="img-fluid bw" alt="default" />
        </div>
      </div>
  </div>
)

export default CompaniesBar
