import Translate from "@app/common/components/Translate";

import eltodo from "@app/data/pictures/companies/eltodo-sq.png";
import eon from "@app/data/pictures/companies/eon-sq.jpg";
import kb from "@app/data/pictures/companies/kb.png";
import o2 from "@app/data/pictures/companies/o2.png";
import dd from "@app/data/pictures/companies/dimension-data-sq.png";
import aaa from "@app/data/pictures/companies/aaa-auto-sq.png";
import upce from "@app/data/pictures/companies/upce.png";
import vse from "@app/data/pictures/companies/vse.png";
import fio from "@app/data/pictures/companies/fio.png";
import cs from "@app/data/pictures/companies/ceskasporitelna.jpg";
import cp from "@app/data/pictures/companies/ceska_pojistovna.jpg";
import zoot from "@app/data/pictures/companies/zoot.jpg";
import cesnet from "@app/data/pictures/companies/cesnet.jpg";
import cgi from "@app/data/pictures/companies/cgi.png";
import cznic from "@app/data/pictures/companies/cznic.png";
import deutcheborse from "@app/data/pictures/companies/deutcheborse.jpg";
import digiteqautomotive from "@app/data/pictures/companies/digiteqautomotive.png";
import eurosoftware from "@app/data/pictures/companies/eurosoftware.png";
import homecredit from "@app/data/pictures/companies/homecredit.png";
import nwt from "@app/data/pictures/companies/nwt.png";
import sde from "@app/data/pictures/companies/sde.png";
import solitea from "@app/data/pictures/companies/solitea.png";
import storaenso from "@app/data/pictures/companies/storaenso.jpg";
import turboconsult from "@app/data/pictures/companies/turboconsult.jpg";
// import wy from "@app/data/pictures/companies/webglobe-yegon-sq.png";
// import lukapo from "@app/data/pictures/companies/lukapo.jpg";
// import animato from "@app/data/pictures/companies/animato.jpg";
// import ants from "@app/data/pictures/companies/ants.png";
// import atelidev from "@app/data/pictures/companies/atelidev.png";
// import sl from "@app/data/pictures/companies/satoshilabs.png";

const CompaniesBar = props => (
  <div className="pb-2">
    <h2 className="pt-5 pb-2">
      <Translate lang={props.lang || "cs"} en="My Clients" cs="Moji klienti" />
    </h2>
    <div className="d-flex row text-center">
      {[
        cp,
        cesnet,
        deutcheborse,
        sde,
        fio,
        eltodo,
        vse,
        eon,
        dd,
        aaa,
        cs,
        zoot,
        o2,
        kb,
        cgi,
        cznic,
        digiteqautomotive,
        eurosoftware,
        homecredit,
        nwt,
        solitea,
        storaenso,
        upce,
        turboconsult
      ].map(img => (
        <div className="col-lg-1 col-md-2 col-sm-4 col-4 pl-0 pr-0">
          <img src={img} className="img-fluid bw" alt="default" />
        </div>
      ))}
    </div>
  </div>
);

export default CompaniesBar;
