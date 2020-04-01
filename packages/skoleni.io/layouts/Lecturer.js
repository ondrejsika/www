import React from "react";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import Link from "next/link";
import H3 from "@app/skoleni.io/components/H3";
import H1 from "@app/skoleni.io/components/H1";

const Img = styled.img`
  width: 100%;
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
        <H3>O mě</H3>
        {props.aboutMe && <Text>{props.aboutMe}</Text>}

        <H3>Co skolim</H3>
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
