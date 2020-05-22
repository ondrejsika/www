import React from "react";

import Translate from "@app/common/components/Translate";

import eltodo from "@app/data/pictures/companies/eltodo.png";
import eon from "@app/data/pictures/companies/eon.png";
import kb from "@app/data/pictures/companies/kb.png";
import o2 from "@app/data/pictures/companies/o2.png";
import vse from "@app/data/pictures/companies/vse.png";
import fio from "@app/data/pictures/companies/fio.png";
import cs from "@app/data/pictures/companies/ceska-sporitelna.png";
import zoot from "@app/data/pictures/companies/zoot-white.png";
import cgi from "@app/data/pictures/companies/cgi.png";
import homecredit from "@app/data/pictures/companies/homecredit.png";
import konica_minolta from "@app/data/pictures/companies/konica-minolta-square.jpg";
import cznic from "@app/data/pictures/companies/cznic.png";
import styled from "styled-components";

const Header = styled.h3`
  font-size: 2.5em;
  font-weight: 700;
  padding-top: 3em;
  padding-bottom: 1em;
  text-align: center;
`;

const CompaniesBar = props => (
  <div className="pb-2">
    <Header>
      {props.myClients || (
        <Translate
          lang={props.lang || "cs"}
          // lang={props.lang}
          en="My Clients"
          cs="Moji klienti"
        />
      )}
    </Header>
    <div className="d-flex row text-center pl-3 pr-3">
      {[
        cs,
        eltodo,
        vse,
        eon,
        fio,
        zoot,
        o2,
        kb,
        cgi,
        homecredit,
        cznic,
        konica_minolta
      ].map((img, i) => (
        <div key={i} className="col-lg-2 col-md-2 col-sm-3 col-2 p-3">
          <img src={img} className="img-fluid bw" alt="default" />
        </div>
      ))}
    </div>
  </div>
);

export default CompaniesBar;
