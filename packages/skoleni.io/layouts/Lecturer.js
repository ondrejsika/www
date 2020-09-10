import React from "react";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import Link from "next/link";
import H3 from "@app/skoleni.io/components/H3";
import H1 from "@app/skoleni.io/components/H1";
import lecturers_data from "@app/data/skoleni.io/lecturers.yml";
import courses_data from "@app/data/skoleni.io/courses.yml";
import StaticDB from "@app/common/staticdb";

const Img = styled.img`
  width: 100%;
`;

const Text = styled.p`
  padding-right: 5em;
`;

const Li = styled.li`
  text-transform: uppercase;
`;

const getCourse = course_id => {
  let db = new StaticDB();
  db.add("courses", courses_data);
  db.add("lecturers", lecturers_data);
  db.setCursor("courses");
  db.filter("id", course_id);
  db.lookupOne("courses", "lecturers", "lecturer_id", "id", "lecturer");
  let course = db.getOne();
  return course;
};

const Lecturer = props => (
  <Container>
    <H1>{props.name}</H1>
    <Row>
      <Col sm={8}>
        {props.bio && <Text>{props.bio}</Text>}

        <H3>Moje kurzy</H3>
        <ul>
          {props.courses.map((course_id, i) => {
            let course = getCourse(course_id);
            return (
              <Li key={i}>
                <Link href={`/skoleni/${course.id}`}>{course.name}</Link>
              </Li>
            );
          })}
        </ul>
      </Col>
      <Col sm={4}>
        <Img src={props.lecturerImg} />
      </Col>
    </Row>
  </Container>
);

export default Lecturer;
