import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import H1 from "@app/skoleni.io/components/H1";

const Courses = styled.div`
  margin: 3em 0;
`;

const Lecturer = styled.span`
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
              <H1>KUBERNETES </H1> <Lecturer>by Ondrej Sika</Lecturer>
            </p>
            <p>
              <H1>DOCKER </H1> <Lecturer>by Ondrej Sika</Lecturer>
            </p>
            <p>
              <H1>GIT </H1> <Lecturer>by Vojtech Mares</Lecturer>
            </p>
            <p>
              <H1>GITLAB CI </H1> <Lecturer>by Vojtech Mares</Lecturer>
            </p>
            <p>
              <H1>PROXMOX </H1> <Lecturer>by Michael Kaplan</Lecturer>
            </p>
            <p>
              <H1>ANSIBLE </H1> <Lecturer>by Ondrej Sika</Lecturer>
            </p>
            <p>
              <H1>ELK </H1> <Lecturer>by Ondrej Sika</Lecturer>
            </p>
            <p>
              <H1>REACT </H1> <Lecturer>by Ondrej Sika</Lecturer>
            </p>
          </Col>
        </Row>
      </Container>
    </Courses>
  </>
);
export default CourseBar;
