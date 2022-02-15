import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

import prusa from "@app/data/pictures/companies/prusa.png";
import SL from "@app/data/pictures/companies/satoshilabs.png";
import cznic from "@app/data/pictures/companies/cznic.png";
import eon from "@app/data/pictures/landing-page/eon.png";
import kb from "@app/data/pictures/landing-page/kb.png";
import o2 from "@app/data/pictures/landing-page/o2.png";
import cs from "@app/data/pictures/landing-page/cs.png";
import zoot from "@app/data/pictures/landing-page/zoot.png";
import cgi from "@app/data/pictures/landing-page/cgi.png";

const Img = styled.img`
  width: 100%;
  padding: 1.5em;
`;

const Companies = () => (
  <>
    <Row>
      {[prusa, eon, kb, cznic, o2, SL, cs, zoot, cgi].map((img, i) => (
        <Col md={4} sm={4} xs={6} key={i}>
          <Img src={img.src} className="img-fluid" alt="default" />
        </Col>
      ))}
    </Row>
  </>
);

export default Companies;
