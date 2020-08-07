import React from "react";
import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";
import logo from "@app/data/pictures/courses/aws-w.png";

const Page = props => (
  <CourseDD
    site={props.site}
    course_id="aws"
    lang={props.site.lang}
    logo={logo}
    location="cz"
    show_sessions={true}
  />
);

export default Page;
