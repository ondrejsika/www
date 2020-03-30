import React from "react";
import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";
import logo from "@app/data/pictures/courses/rancher-white.png";

const Page = props => (
  <CourseDD
    site={props.site}
    course_id="rancher"
    lang={props.site.lang}
    logo={logo}
    location="de"
    show_sessions={true}
  />
);

export default Page;
