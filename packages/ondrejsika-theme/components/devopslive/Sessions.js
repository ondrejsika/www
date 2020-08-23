import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import close from "@app/data/pictures/close.svg";
import arrow from "@app/data/pictures/arrow.svg";
import ColorBox from "@app/ondrejsika-theme/components/devopslive/ColorBox";
import TechnologyIcons from "@app/ondrejsika-theme/components/devopslive/TechnologyIcons";
import Markdown from "@app/common/components/Markdown";
import Button from "@app/ondrejsika-theme/components/lp/LP-button";

const Hidden = styled(Row)``;
const TextBeige = styled.span`
  color: #c8bfb0 !important;
`;
const Center = styled.div`
  text-align: center;
`;

const Sessions = props => {
  const [showNextSession, setNextSession] = useState(false);
  const handleShow = () => setNextSession(true);
  const handleClose = () => setNextSession(false);
  return (
    <ColorBox white className="mt-3">
      {!showNextSession ? (
        <Row>
          <Col md={11}>
            <div onClick={handleShow}>
              <TextBeige className="pt-4">
                {props.event.date} od {props.event.time}
              </TextBeige>
              <h3 className="pb-2 bold">{props.event.title}</h3>
            </div>
          </Col>
          <Col md={1}>
            {!showNextSession ? (
              <span onClick={handleShow}>
                <img src={arrow} />
              </span>
            ) : (
              <span onClick={handleClose}>
                <img src={close} />
              </span>
            )}
          </Col>
        </Row>
      ) : (
        <>
          <Row>
            <Col md={11}>
              <div onClick={handleShow} style={{ maxWidth: "550px" }}>
                <TextBeige className="pt-4">
                  {props.event.date} od {props.event.time}
                </TextBeige>
                <h3 className="pb-2 bold">{props.event.title}</h3>
              </div>
            </Col>
            <Col md={1}>
              {!showNextSession ? (
                <span onClick={handleShow}>
                  <img src={arrow} />
                </span>
              ) : (
                <span onClick={handleClose}>
                  <img src={close} />
                </span>
              )}
            </Col>
          </Row>
          <Hidden showNextSession={showNextSession}>
            <Col md={6}>
              <p className="pb-4 pt-3">
                <Markdown source={props.event.points} />
              </p>
            </Col>
            <Col md={6} className="pt-3">
              <Center>
                {props.event.technologies.map((technology, i) => (
                  <TechnologyIcons blue key={i} icon={technology} />
                ))}
              </Center>
            </Col>
            <Col md={6}>
              <Center>
                <Button inverse huge href="/">
                  Přihlásit
                </Button>
              </Center>
            </Col>
            <Col
              md={6}
              className="pt-3"
              // style={{ borderLeft: "5px solid #c8bfb0" }}
            >
              <Center>
                <h3
                  className="pt-3"
                  style={{
                    color: "#c8bfb0"
                  }}
                >
                  Zdarma nebo 200 Kč
                </h3>
              </Center>
            </Col>
          </Hidden>
        </>
      )}
    </ColorBox>
  );
};

export default Sessions;
