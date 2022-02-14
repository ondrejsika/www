import React from "react";

const BootstrapComponentWithJS = () => (
  <div>
    <p>
      <a
        className="btn btn-primary"
        data-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Collapse Example
      </a>
    </p>
    <div className="collapse" id="collapseExample">
      <div className="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
    <div className="btn-group" role="group">
      <button
        id="btnGroupDrop1"
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <a className="dropdown-item" href="#">
          Dropdown link
        </a>
        <a className="dropdown-item" href="#">
          Dropdown link
        </a>
      </div>
    </div>
  </div>
);

export default BootstrapComponentWithJS;
