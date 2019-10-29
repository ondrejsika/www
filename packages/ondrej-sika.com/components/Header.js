const Header = props => (
  <div>
    <div className="bar-header">
      <div className="container">
        {(() => {
          if (props.websiteHeaderCenter)
            return (
              <div className="pt-4 pb-4">
                <h1 className="text-white pt-3 pb-2 text-center">
                  {props.websiteHeaderCenter}
                </h1>
              </div>
            );
          else
            return (
              <div className="row">
                <div className="col-lg-10 col-md-9 col-sm-8 col-8">
                  <div className="pt-4 pb-4">
                    <h1 className="text-white pt-3 pb-2">
                      {props.websiteHeader}
                    </h1>
                    {(() => {
                      if (props.inquiryBtn)
                        return (
                          <a href="#form" className="btn btn-outline-header">
                            {props.inquiryBtn}
                          </a>
                        );
                    })()}
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-4 p-4">
                  <img src={props.logo} className="img-fluid align-right" />
                </div>
              </div>
            );
        })()}
      </div>
    </div>
  </div>
);

export default Header;
