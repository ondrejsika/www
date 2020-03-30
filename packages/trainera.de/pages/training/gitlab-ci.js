import React from "react";
import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";
import logo from "@app/data/pictures/courses/gitlab-ci.svg";

const Page = props => (
  <CourseDD
    site={props.site}
    course_id="gitlab-ci"
    lang={props.site.lang}
    logo={logo}
    location="de"
    show_sessions={true}
  />
);

export default Page;
