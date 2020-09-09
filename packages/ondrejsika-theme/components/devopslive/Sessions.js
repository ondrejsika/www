import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import close from "@app/data/pictures/close.svg";
import arrow from "@app/data/pictures/arrow.svg";
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
const SectionHeader = styled.h3`
  color: #131480;
  font-weight: bold;
  padding-bottom: 0.5em;
`;
const Text = styled.p`
  color: #131480;
`;
const Dropbox = styled.div`
  background-color: white;
  padding: 1em 1em 0.5em 3em;
`;
const DropIcon = styled.img`
  padding-top: 0.5em;
`;

const Sessions = props => {
  const [showNextSession, setNextSession] = useState(false);
  const handleShow = () => setNextSession(true);
  const handleClose = () => setNextSession(false);
  return (
    <>
      {props.event.active && (
        <Dropbox white className="mt-3">
          {!showNextSession ? (
            <Row>
              <Col md={11}>
                <div onClick={handleShow}>
                  <TextBeige className="pt-4">
                    {props.event.date} od {props.event.time}
                  </TextBeige>
                  <SectionHeader>{props.event.title}</SectionHeader>
                </div>
              </Col>
              <Col md={1}>
                {!showNextSession ? (
                  <span onClick={handleShow}>
                    <DropIcon src={arrow} />
                  </span>
                ) : (
                  <span onClick={handleClose}>
                    <DropIcon src={close} />
                  </span>
                )}
              </Col>
            </Row>
          ) : (
            <>
              <Row>
                <Col md={11}>
                  <div onClick={handleShow}>
                    <TextBeige className="pt-4">
                      {props.event.date} od {props.event.time}
                    </TextBeige>
                    <SectionHeader>{props.event.title}</SectionHeader>
                  </div>
                </Col>
                <Col md={1}>
                  {!showNextSession ? (
                    <span onClick={handleShow}>
                      <DropIcon src={arrow} />
                    </span>
                  ) : (
                    <span onClick={handleClose}>
                      <DropIcon src={close} />
                    </span>
                  )}
                </Col>
              </Row>
              <Hidden showNextSession={showNextSession}>
                <Col md={6}>
                  <Text className="pb-4 pt-3">
                    <Markdown source={props.event.points} />
                  </Text>
                  <Center>
                    <Button huge href={props.event.eventbrite}>
                      Přihlásit
                    </Button>
                  </Center>
                </Col>
                <Col
                  md={6}
                  className="pt-3"
                  style={{ borderLeft: "2px solid #c8bfb0" }}
                >
                  <Center>
                    {props.event.technologies.map((technology, i) => (
                      <TechnologyIcons blue key={i} icon={technology} />
                    ))}
                  </Center>
                </Col>
              </Hidden>
            </>
          )}
        </Dropbox>
      )}
    </>
  );
};

export default Sessions;
