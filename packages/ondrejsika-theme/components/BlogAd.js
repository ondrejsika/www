import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import sessions from "@app/data/training/sessions.yml";
import StaticDB from "@app/common/staticdb";
import courses_yaml from "@app/data/training/courses.yml";

let session_id_map = {};
sessions.map((element, i) => {
  session_id_map[element.id] = i;
});

const BlogAd = props => {
  //   let lang = props.site.lang || "cs"

  let db = new StaticDB();
  db.add("courses", courses_yaml);
  db.setCursor("courses");
  //   db.filter("id", session.course_id);
  //   let course = db.getOne();

  const Background = styled.div`
    color: white;
    border: 1px solid #808080;
    padding: 1em;
    background-color: ${(props.site &&
      props.site.colors &&
      props.site.colors.PRIMARY) ||
      "grey"};
  `;
  return (
    <>
      <Background site={props.site}>
        <Row>
          <Col md={12}>
            <h3>Zajímáte se o Kubernetes? Zkuste mé Školení Kubernetes!</h3>
            {/* <Markdown source={course.agenda[lang]} /> */}
          </Col>
          <Col md={4}></Col>
        </Row>
      </Background>
    </>
  );
};

export default BlogAd;
