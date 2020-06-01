import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import Translate from "@app/common/components/Translate";

const Text = styled.h3`
  padding: 0;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 200;
`;

const Page = props => (
  <>
    <Row className="pt-5">
      <Col md={6}>
        <Text>
          <Translate
            lang={props.lang || "cs"}
            en="Book us for an open session or in-house training and let us boost the productivity of your teams."
            cs="Nabízíme otevřené termíny a in-house školení. Školíme v českém i anglickém jazyce."
          />
        </Text>
      </Col>
      <Col md={6}>
        <Text>
          <Translate
            lang={props.lang || "cs"}
            en="As we've hepled banks, telcos or startups to be more productive we can help you too."
            cs="Pomohli jsme už korporátům, bankám, telefonním operátorům a pomůžeme i Vám."
          />
        </Text>
      </Col>
    </Row>
  </>
);

export default Page;
