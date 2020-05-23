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
            en="We offer open session or in-house training. "
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
      {/* <TextArea.P>
        We are training agency focused on DevOps. Our team is made up of
        experienced DevOps lecturers who work with DeoOps technologies on a
        daily basis. Therefore they can explain the technology clearly for
        beginners and answer all practical questions from attendees.
      </TextArea.P>
      <TextArea.P>
        Technology stack, which we train, is a set of depending tools, which
        boost the effectiveness and productivity of your teams &amp; yours. You
        can expect faster delivery of new features to your clients as well as
        cutting your operating budget.
      </TextArea.P>
      <TextArea.P>
        DevOps to the edge. Start with Docker, Kubernetes or CI today!
      </TextArea.P>
      <TextArea.P>
         Due
        to Covid-19 we are 100% online.
      </TextArea.P> */}
    </Row>
  </>
);

export default Page;
