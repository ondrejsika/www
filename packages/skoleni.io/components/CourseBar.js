import React from "react";
import styled from "styled-components";
import H1 from "@app/skoleni.io/components/H1";
import Link from "@app/skoleni.io/components/MyLink";
import courses_data from "@app/data/training/courses.yml";
import StaticDB from "@app/common/staticdb";

const Courses = styled.div`
  margin: 0;
`;

const Lecturer = styled.span`
  font-size: 1.5em;
`;

let db = new StaticDB();
db.add("courses", courses_data);
db.setCursor("courses");
db.filterExists("skoleniio");
let courses = db.get();

const CourseBar = () => (
  <>
    <Courses>
      {courses.map((skoleni_io, i) => {
        return (
          <div key={i}>
            <Courses>
              <H1>
                <Link href={`skoleni/${skoleni_io.id}`}>
                  {skoleni_io.skoleniio.name}{" "}
                </Link>
              </H1>
              <Lecturer>
                by&nbsp;
                <Link href={`lektor/${skoleni_io.skoleniio.lecturer}`}>
                  {skoleni_io.skoleniio.lecturer}
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
