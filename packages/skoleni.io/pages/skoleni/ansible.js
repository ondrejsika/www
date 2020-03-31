import React from "react";
import CourseDD from "@app/skoleni.io/layouts/CourseDD";
import logo from "@app/data/pictures/courses/ansible-w.svg";

const Page = props => (
  <CourseDD
    course_id="ansible"
    lang={props.site.lang}
    logo={logo}
    location="cz"
    show_sessions={true}
  />
);

export default Page;
