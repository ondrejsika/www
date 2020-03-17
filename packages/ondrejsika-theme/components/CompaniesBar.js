import React from "react";

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
// import cp from "@app/data/pictures/companies/ceska_pojistovna.jpg";
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
import wy from "@app/data/pictures/companies/webglobe-yegon-sq.png";
import lukapo from "@app/data/pictures/companies/lukapo.jpg";
import animato from "@app/data/pictures/companies/animato.jpg";
import ants from "@app/data/pictures/companies/ants.png";
// import atelidev from "@app/data/pictures/companies/atelidev.png";
import sl from "@app/data/pictures/companies/satoshilabs.png";

import fg_forrest from "@app/data/pictures/companies/fg-forrest-square.png";
import azd_praha from "@app/data/pictures/companies/azd-praha-square.jpg";
import konica_minolta from "@app/data/pictures/companies/konica-minolta-square.jpg";
import shopsys from "@app/data/pictures/companies/shopsys-square.png";
import invasys from "@app/data/pictures/companies/invasys-square.png";
import actis from "@app/data/pictures/companies/actis-square.png";
// import spcss from "@app/data/pictures/companies/spcss-square.jpg";
import ica from "@app/data/pictures/companies/ica-square.jpg";
import cra from "@app/data/pictures/companies/cra-square.jpg";

const CompaniesBar = props => (
  <div className="pb-2">
    <h2 className="pt-5 pb-2">
      <Translate lang={props.lang || "cs"} en="My Clients" cs="Moji klienti" />
    </h2>
    <div className="d-flex row text-center">
      {[
        invasys,
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
        turboconsult,
        wy,
        lukapo,
        // atelidev,
        animato,
        ants,
        sl,
        fg_forrest,
        azd_praha,
        konica_minolta,
        shopsys,
        actis,
        // cp,
        // spcss,
        ica,
        cra
      ].map((img, i) => (
        <div key={i} className="col-lg-1 col-md-2 col-sm-4 col-4 pl-0 pr-0">
          <img src={img} className="img-fluid bw" alt="default" />
        </div>
      ))}
    </div>
  </div>
);

export default CompaniesBar;
