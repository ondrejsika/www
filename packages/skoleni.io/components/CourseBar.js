import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import H1 from "@app/skoleni.io/components/H1";

const Courses = styled.div`
  margin: 3em 0;
`;

const Lecturer = styled.span`
  font-size: 2em;
  font-weight: bold;
`;

const CourseBar = props => (
  <>
    <Courses>
      <Container>
        {props.courses.map((course, i) => (
          <div key={i}>
            <a href={`skoleni/${course[1]}`}>
              <H1>{course[0]} </H1>
            </a>{" "}
            <a href={`lektor/${course[3]}`}>
              <Lecturer>by {course[2]}</Lecturer>
            </a>
          </div>
        ))}
      </Container>
    </Courses>
  </>
);
export default CourseBar;
