import React from "react";
import styled from "styled-components";
import H1 from "@app/skoleni.io/components/H1";
// import Link from "@app/skoleni.io/components/MyLink";
import technologies_data from "@app/data/skoleni.io/technologies.yml";
import StaticDB from "@app/common/staticdb";
import Link from "next/link";

const Courses = styled.div`
  margin: 0;
`;

let db = new StaticDB();
db.add("technologies", technologies_data);
db.setCursor("technologies");
let technologies = db.get();

const CourseBar = () => (
  <>
    <Courses>
      {technologies.map((technology, i) => {
        return (
          <div key={i}>
            <Courses>
              <H1>
                <Link href={`seznam-skoleni/${technology.id}`}>
                  {technology.name}{" "}
                </Link>
              </H1>
              {/* <Lecturer>
                by&nbsp;
                <Link href={`lektor/${skoleni_io.skoleniio.lecturer}`}>
                  {skoleni_io.skoleniio.lecturer}
                </Link>
              </Lecturer> */}
            </Courses>
          </div>
        );
      })}
    </Courses>
  </>
);
export default CourseBar;
