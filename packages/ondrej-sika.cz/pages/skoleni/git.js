import React from "react";
import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";
import logo from "@app/data/pictures/courses/git-w.svg";

const Page = props => (
  <CourseDD
    course_id="git"
    lang={props.site.lang}
    logo={logo}
    location="cz"
    show_sessions={true}
  />
);
export default Page;
