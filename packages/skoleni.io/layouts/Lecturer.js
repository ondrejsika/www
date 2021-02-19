import React from "react";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import Link from "next/link";
import H3 from "@app/skoleni.io/components/H3";
import H1 from "@app/skoleni.io/components/H1";
import lecturers_data from "@app/data/skoleni.io/lecturers.yml";
import courses_data from "@app/data/skoleni.io/courses.yml";
import recommendations_data from "@app/data/skoleni.io/recommendations.yml";
import StaticDB from "@app/common/staticdb";
import Markdown from "@app/common/components/Markdown";
import Head from "next/head";

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

const getRecommendationsByLecturer = lecturer_id => {
  let db = new StaticDB();
  db.add("recommendations", recommendations_data);
  db.setCursor("recommendations");
  db.filter("lecturer_id", lecturer_id);
  let recommendations = db.get();
  return recommendations;
};

const Lecturer = props => (
  <>
    <Head>
      <title>{props.name} - lektor</title>
    </Head>
    <Container>
      <H1>{props.name}</H1>
      <Row>
        <Col sm={8}>
          {props.bio && (
            <Text>
              <Markdown source={props.bio} />
            </Text>
          )}
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
          {getRecommendationsByLecturer(props.lecturer.id).length > 0 && (
            <H3>Doporučení</H3>
          )}
          <ul>
            {getRecommendationsByLecturer(props.lecturer.id).map(
              (recommendation, i) => {
                return (
                  <li key={i}>
                    {recommendation.text}
                    <br />
                    --{" "}
                    <strong>
                      {recommendation.name ? `${recommendation.name}, ` : " "}
                      {recommendation.role ? `${recommendation.role}, ` : " "}
                      {recommendation.company}
                    </strong>
                  </li>
                );
              }
            )}
          </ul>
        </Col>
        <Col sm={4}>
          <Img src={props.image_url} className="img-fluid rounded-circle" />
          <center>
            {props.lecturer.twitter && (
              <a href={`https://twitter.com/${props.lecturer.twitter}`}>
                @{props.lecturer.twitter}
              </a>
            )}
            {props.lecturer.linkedin && (
              <>
                <br />
                <a href={`https://linkedin.com/in/${props.lecturer.linkedin}`}>
                  /in/{props.lecturer.linkedin}
                </a>
              </>
            )}
            {props.lecturer.email && (
              <>
                <br />
                <a
                  href={`mailto:${props.lecturer.email}?subject=[skoleni.io] Poptavka skoleni&cc=skoleni@skoleni.io`}
                >
                  {props.lecturer.email}
                </a>
              </>
            )}
            {props.lecturer.phone && (
              <>
                <br />
                <a href={`tel:${props.lecturer.phone.replace(/\s/g, "")}`}>
                  {props.lecturer.phone}
                </a>
              </>
            )}
          </center>
        </Col>
      </Row>
    </Container>
  </>
);

export default Lecturer;
