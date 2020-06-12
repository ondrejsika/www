import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

import eltodo from "@app/data/pictures/landing-page/eltodo.png";
import eon from "@app/data/pictures/landing-page/eon.png";
import kb from "@app/data/pictures/landing-page/kb.png";
import o2 from "@app/data/pictures/landing-page/o2.png";
import fio from "@app/data/pictures/landing-page/fio.png";
import cs from "@app/data/pictures/landing-page/cs.png";
import zoot from "@app/data/pictures/landing-page/zoot.png";
import cgi from "@app/data/pictures/landing-page/cgi.png";
import homecredit from "@app/data/pictures/landing-page/homecredit.png";

const Img = styled.img`
  width: 100%;
  padding: 1.5em;
`;

const Companies = () => (
  <>
    <Row>
      {[eltodo, eon, fio, kb, cgi, homecredit, o2, cs, zoot].map((img, i) => (
        <Col md={4} sm={4} xs={6} key={i}>
          <Img src={img} className="img-fluid" alt="default" />
        </Col>
      ))}
    </Row>
  </>
);

export default Companies;
