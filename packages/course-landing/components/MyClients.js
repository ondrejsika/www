import React from "react";
import termo_fish from "./MyClients/thermo_fish.jpg";
import aaa_auto from "./MyClients/aaa_auto.png";
import kb from "./MyClients/kb.png";
import fio from "./MyClients/fio.png";
import o2 from "./MyClients/o2.png";
import ceska_pojistovna from "./MyClients/ceska_pojistovna.jpg";

import Translate from "@app/common/components/Translate";

const MyClients = props => (
  <div>
    <div className={props.noBorder ? "p-3 mb-4" : "card p-3 mb-4"}>
      <h3>
        <Translate
          lang={props.lang}
          en="My Clients"
          de="My Clients"
          cs="Moji nejvýznamější klienti"
        />
      </h3>
      <div className="d-flex row text-center pt-3 pb-3">
        <div className="col-lg-2 col-md-4 col-sm-4 col-6">
          <img src={termo_fish.src} className="img-fluid" alt="default" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6">
          <img src={aaa_auto.src} className="img-fluid" alt="default" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6">
          <img src={kb.src} className="img-fluid" alt="default" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6">
          <img src={fio.src} className="img-fluid" alt="default" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6">
          <img src={o2.src} className="img-fluid" alt="default" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6">
          <img src={ceska_pojistovna.src} className="img-fluid" alt="default" />
        </div>
      </div>
    </div>
  </div>
);
export default MyClients;
