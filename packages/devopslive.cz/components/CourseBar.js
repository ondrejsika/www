import React from "react";
import styled from "styled-components";
import H3 from "./H3";
// import Link from "@app/devopslive.cz/components/MyLink";
import Link from "next/link";
import { Container } from "react-bootstrap";

const Courses = styled.div`
  margin: 0;
  padding: 1em 0;
  background-color: #131480;
`;
const Lecture = styled.a`
  color: #c8bfb0;
  :hover {
    color: white;
    text-decoration: none;
  }
`;
const About = styled.p`
  color: white;
  margin-bottom: 0.3rem;
`;
const Date = styled.span`
  font-size: 1em;
  color: white;
  margin-bottom: 1.3em !important;
`;

const CourseBar = props => (
  <>
    <Courses>
      <Container>
        {props.courses.map((course, i) => (
          <div key={i}>
            <H3>
              <Link href={`skoleni/${course[1]}`}>
                <Lecture href={`skoleni/${course[1]}`}>{course[0]} </Lecture>
              </Link>
            </H3>
            <About>{course[3]}</About>
            <Date>
              <p>- {course[2]}</p>
            </Date>
          </div>
        ))}
      </Container>
    </Courses>
  </>
);
export default CourseBar;
