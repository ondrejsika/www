import React from "react";
import StaticDB from "@app/common/staticdb";
import Header from "@app/skoleni.io/components/Header";
import { Container } from "react-bootstrap";
import Link from "next/link";
import technologies_data from "@app/data/skoleni.io/technologies.yml";
import courses_data from "@app/data/skoleni.io/courses.yml";
import lecturers_data from "@app/data/skoleni.io/lecturers.yml";
import H3 from "@app/skoleni.io/components/H3";
import Li from "@app/skoleni.io/components/H3";
import Markdown from "@app/common/components/Markdown";

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

const CourseList = props => {
  let technology_id = props.technology_id;

  let db = new StaticDB();
  db.add("technologies", technologies_data);
  db.setCursor("technologies");
  db.filter("id", technology_id);
  let technology = db.getOne();

  return (
    <>
      <Header header={technology.name} />
      <Container>
        <Markdown source={technology.description} />
        <H3>Lektori</H3>
        <ul>
          {technology.courses.map((course_id, i) => {
            let course = getCourse(course_id);
            return (
              <Li key={i}>
                <Link href={`/skoleni/${course.id}`}>
                  <a>{course.lecturer.name}</a>
                </Link>
              </Li>
            );
          })}
        </ul>
      </Container>
    </>
  );
};

export default CourseList;
