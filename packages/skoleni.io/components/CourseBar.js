import React from "react";
import styled from "styled-components";
import H1 from "@app/skoleni.io/components/H1";
import Link from "@app/skoleni.io/components/MyLink";
import skoleni_io_data from "@app/data/training/courses-skoleniio.yml";

const Courses = styled.div`
  margin: 0;
`;

const Lecturer = styled.span`
  font-size: 1.5em;
`;

const CourseBar = () => (
  <>
    <Courses>
      {skoleni_io_data.map((skoleni_io, i) => {
        return (
          <div key={i}>
            <Courses>
              <H1>
                <Link href={`skoleni/${skoleni_io.id}`}>
                  {skoleni_io.course}{" "}
                </Link>
              </H1>
              <Lecturer>
                by&nbsp;
                <Link href={`lektor/${skoleni_io.lecturer}`}>
                  {skoleni_io.lecturer_name}
                </Link>
              </Lecturer>
            </Courses>
          </div>
        );
      })}
    </Courses>
  </>
);
export default CourseBar;
