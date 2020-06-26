import React from "react";
import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";
import logo from "@app/data/pictures/courses/white/docker.svg";

const Page = props => (
  <CourseDD
    site={props.site}
    course_id="docker"
    lang={props.site.lang}
    logo={logo}
    location="cz"
    hide_prices={true}
    show_sessions={true}
  />
);

export default Page;
