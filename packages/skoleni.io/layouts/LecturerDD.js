import React from "react";
import Lecturer from "@app/skoleni.io/layouts/Lecturer";
import lecturers_yaml from "@app/data/skoleni.io/lecturers.yml";
import courses_yaml from "@app/data/skoleni.io/courses.yml";
import StaticDB from "@app/common/staticdb";

const LecturerDD = props => {
  let lecturer_id = props.lecturer_id;

  let db = new StaticDB();
  db.add("lecturers", lecturers_yaml);
  db.add("courses", courses_yaml);
  db.setCursor("lecturers");
  db.filter("id", lecturer_id);

  let lecturer = db.getOne();

  let bio = lecturer.bio;
  let courses = lecturer.courses;
  let name = lecturer.name;

  return (
    <Lecturer lecturer={lecturer} name={name} bio={bio} courses={courses} />
  );
};

export default LecturerDD;
