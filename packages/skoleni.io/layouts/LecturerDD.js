import React from "react";
import Lecturer from "@app/skoleni.io/layouts/Lecturer";
import lecturers_yaml from "@app/data/skoleni.io/lecturers.yml";
import courses_yaml from "@app/data/skoleni.io/courses.yml";
import StaticDB from "@app/common/staticdb";

import img_ondrejsika from "@app/data/pictures/ondrejsika.jpg";
import img_janpospisil from "@app/data/pictures/lecturers/janpospisil.jpg";

const imgs = {
  ondrejsika: img_ondrejsika,
  janpospisil: img_janpospisil
};

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
  let lecturerImg = imgs[lecturer_id];

  return (
    <Lecturer
      lecturer={lecturer}
      name={name}
      bio={bio}
      lecturerImg={lecturerImg}
      courses={courses}
    />
  );
};

export default LecturerDD;
