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

const Header = styled.h3`
  text-transform: uppercase;
  font-size: 2em;
`;

const Text = styled.p`
  padding-right: 5em;
`;

const Li = styled.li`
  text-transform: uppercase;
`;

const Lecturer = props => (
  <Container>
    <H1>{props.name}</H1>
    <Row>
      <Col sm={8}>
        {props.bio && <Text>{props.bio}</Text>}
        <Header>O mě</Header>
        {props.aboutMe && <Text>{props.aboutMe}</Text>}

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
