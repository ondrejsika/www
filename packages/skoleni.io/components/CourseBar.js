import React from "react";
import styled from "styled-components";
import H1 from "@app/skoleni.io/components/H1";
import Link from "@app/skoleni.io/components/MyLink";

const Courses = styled.div`
  margin: 0;
`;

const Lecturer = styled.span`
  font-size: 1.5em;
`;

const CourseBar = props => (
  <>
    <Courses>
      {props.courses.map((course, i) => (
        <div key={i}>
          <H1>
            <Link href={`skoleni/${course[1]}`}>{course[0]} </Link>
          </H1>
          <Lecturer>
            by&nbsp;<Link href={`lektor/${course[3]}`}>{course[2]}</Link>
          </Lecturer>
        </div>
      ))}
    </Courses>
  </>
);
export default CourseBar;
