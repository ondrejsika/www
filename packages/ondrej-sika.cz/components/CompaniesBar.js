import wy from "@app/data/pictures/companies/webglobe-yegon-sq.png";
import eltodo from "@app/data/pictures/companies/eltodo-sq.png";
import eon from "@app/data/pictures/companies/eon-sq.jpg";
import kb from "@app/data/pictures/companies/kb-sq.jpg";
import dd from "@app/data/pictures/companies/dimension-data-sq.png";
import aaa from "@app/data/pictures/companies/aaa-auto-sq.png";
import Translate from "@app/common/components/Translate";

const CompaniesBar = props => (
  <div className="pb-2">
    <h2 className="pt-5 pb-2">
      <Translate
        lang={props.lang || "cs"}
        en="My Clients"
        cs="Firmy se kterými spolupracuji"
      />
    </h2>
    <div className="d-flex row text-center">
      <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
        <img src={wy} className="img-fluid bw" alt="default" />
      </div>
      <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
        <img src={eltodo} className="img-fluid bw" alt="default" />
      </div>
      <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
        <img src={eon} className="img-fluid bw" alt="default" />
      </div>
      <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
        <img src={kb} className="img-fluid bw" alt="default" />
      </div>
      <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
        <img src={dd} className="img-fluid bw" alt="default" />
      </div>
      <div className="col-lg-2 col-md-2 col-sm-4 col-4 pl-0 pr-0">
        <img src={aaa} className="img-fluid bw" alt="default" />
      </div>
    </div>
  </div>
);

export default CompaniesBar;
