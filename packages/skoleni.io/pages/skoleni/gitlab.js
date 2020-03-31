import React from "react";
import CourseDD from "@app/skoleni.io/layouts/CourseDD";
import logo from "@app/data/pictures/courses/gitlab-ci.svg";

const Page = props => (
  <CourseDD
    course_id="gitlab-ci"
    lang={props.site.lang}
    logo={logo}
    location="cz"
    show_sessions={true}
  />
);

export default Page;
