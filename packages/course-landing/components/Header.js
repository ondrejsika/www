const Header = (props) => (
  <div>
    <div className="container-fluid header-container">
    <div className="header mt-0">
        <div className="container">
            <div className="row">
                <div className="col-md-9 ">
                    <div className="header-inner">
                        <span className="site-header">
                            <a href="/"><h1 className="mb-0">{props.websiteHeader}</h1></a>
                        </span>
                        <p>by <a href={props.byUrl}><b>{props.byName}</b></a></p>
                        {props.children}
                    </div>
                </div>
                <div className="col-md-3 ">
                    <img src={props.logoUrl} className="img-responsive d-none d-lg-block" />
                </div>
            </div>
        </div>
    </div>
</div>
  </div>
)

export default Header
