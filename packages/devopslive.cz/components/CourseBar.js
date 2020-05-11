import React from "react";
import styled from "styled-components";
import H3 from "./H3";
// import Link from "@app/devopslive.cz/components/MyLink";
import Link from "next/link";
import { Container } from "react-bootstrap";
import devops_live_data from "@app/data/training/devops_live.yml";

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
const LectureDate = styled.span`
  font-size: 1em;
  color: white;
  margin-bottom: 1.3em !important;
`;

const CourseBar = () => {
  devops_live_data.sort((a, b) => {
    let dateA = new Date(a.date_id);
    let dateB = new Date(b.date_id);
    if (dateA - dateB > 0) return 1;
    else if (dateA - dateB < 0) {
      return -1;
    } else {
      return 0;
    }
  });
  return (
    <>
      {devops_live_data.map((devops_live, i) => {
        return (
          <div key={i}>
            <Courses>
              <Container>
                <div>
                  <H3>
                    <Link href={devops_live.id}>
                      <Lecture href={devops_live.id}>
                        {devops_live.title}
                      </Lecture>
                    </Link>
                  </H3>
                  <About>{devops_live.text}</About>
                  <LectureDate>
                    <p>- {devops_live.date}</p>
                  </LectureDate>
                </div>
              </Container>
            </Courses>
          </div>
        );
      })}
    </>
  );
};

export default CourseBar;
