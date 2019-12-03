// import wy from "@app/data/pictures/companies/webglobe-yegon-sq.png";
import eltodo from "@app/data/pictures/companies/eltodo-sq.png";
import eon from "@app/data/pictures/companies/eon-sq.jpg";
import kb from "@app/data/pictures/companies/kb.png";
import o2 from "@app/data/pictures/companies/o2.png";
import dd from "@app/data/pictures/companies/dimension-data-sq.png";
import aaa from "@app/data/pictures/companies/aaa-auto-sq.png";
import upce from "@app/data/pictures/companies/upce.png";
import vse from "@app/data/pictures/companies/vse.png";
import fio from "@app/data/pictures/companies/fio.png";
// import sl from "@app/data/pictures/companies/satoshilabs.png";
import cs from "@app/data/pictures/companies/ceskasporitelna.jpg";
import cp from "@app/data/pictures/companies/ceska_pojistovna.jpg";
import zoot from "@app/data/pictures/companies/zoot.jpg";
import Translate from "@app/common/components/Translate";

const CompaniesBar = props => (
  <div className="pb-2">
    <h2 className="pt-5 pb-2">
      <Translate lang={props.lang || "cs"} en="My Clients" cs="Moji klienti" />
    </h2>
    <div className="d-flex row text-center">
      {[cp, o2, kb, upce, fio, eltodo, vse, eon, dd, aaa, cs, zoot].map(img => (
        <div className="col-lg-1 col-md-2 col-sm-4 col-4 pl-0 pr-0">
          <img src={img} className="img-fluid bw" alt="default" />
        </div>
      ))}
    </div>
  </div>
);

export default CompaniesBar;
