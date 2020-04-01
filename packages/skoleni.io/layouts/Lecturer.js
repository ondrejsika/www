import React from "react";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import Link from "next/link";

const H1 = styled.h1`
  font-size: 6em;
  padding: 0.05em 0;
  font-weight: bold;
  text-transform: uppercase;
`;

const Img = styled.img`
  width: 100%;
`;

const Header = styled.h3``;
const Bio = styled.p``;
const AboutMe = styled.p``;

const Li = styled.li`
  text-transform: uppercase;
`;

const Lecturer = props => (
  <Container>
    <H1>{props.name}</H1>
    <Row>
      <Col sm={8}>
        {props.bio && <Bio>{props.bio}</Bio>}
        <Header>O mě</Header>
        {props.aboutMe && <AboutMe>{props.aboutMe}</AboutMe>}

        <Header>Co skolim</Header>
        <ul>
          {props.courses.map((course, i) => (
            <Li key={i}>
              <Link href={`/skoleni/${course}`}>{course}</Link>
            </Li>
          ))}
        </ul>
      </Col>
      <Col sm={4}>
        <Img src={props.lecturerImg} />
      </Col>
    </Row>
  </Container>
);

export default Lecturer;
