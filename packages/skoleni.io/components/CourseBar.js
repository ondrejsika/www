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
