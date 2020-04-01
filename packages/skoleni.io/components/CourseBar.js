import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

const Courses = styled.div`
  margin: 3em 0;
`;

const H1 = styled.span`
  font-size: 6em;
  padding: 0.05em 0;
  font-weight: bold;
`;

const FOO = styled.span`
  font-size: 2em;
  font-weight: bold;
`;

const CourseBar = () => (
  <>
    <Courses>
      <Container>
        <Row>
          <Col md={12}>
            <p>
              <H1>KUBERNETES </H1> <FOO>by Ondrej Sika</FOO>
            </p>
            <p>
              <H1>DOCKER </H1> <FOO>by Ondrej Sika</FOO>
            </p>
            <p>
              <H1>GIT </H1> <FOO>by Vojtech Mares</FOO>
            </p>
            <p>
              <H1>GITLAB CI </H1> <FOO>by Vojtech Mares</FOO>
            </p>
            <p>
              <H1>PROXMOX </H1> <FOO>by Michael Kaplan</FOO>
            </p>
            <p>
              <H1>ANSIBLE </H1> <FOO>by Ondrej Sika</FOO>
            </p>
            <p>
              <H1>ELK </H1> <FOO>by Ondrej Sika</FOO>
            </p>
            <p>
              <H1>REACT </H1> <FOO>by Ondrej Sika</FOO>
            </p>
          </Col>
        </Row>
      </Container>
    </Courses>
  </>
);
export default CourseBar;
