import React from "react";
import Course from "@app/skoleni.io/layouts/Course";
import logo from "@app/data/pictures/courses/git-w.svg";

const Page = props => (
  <Course
    course_id="git"
    lang={props.site.lang}
    logo={logo}
    location="cz"
    show_sessions={true}
  />
);

export default Page;
