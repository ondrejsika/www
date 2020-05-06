import React from "react";
import styled from "styled-components";
import H3 from "./H3";
// import Link from "@app/devopslive.cz/components/MyLink";
import Link from "next/link";

const Courses = styled.div`
  margin: 0;
  background-color: #131480;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const Lecturer = styled.span`
  font-size: 1em;
`;

const CourseBar = props => (
  <>
    <Courses>
      {props.courses.map((course, i) => (
        <div key={i}>
          <H3>
            <Link href={`skoleni/${course[1]}`}>
              <a href={`skoleni/${course[1]}`}>{course[0]} </a>
            </Link>
          </H3>
          <Lecturer>
            <p>({course[2]})</p>
          </Lecturer>
        </div>
      ))}
    </Courses>
  </>
);
export default CourseBar;
