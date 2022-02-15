import React from "react";
import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";
import logo from "@app/data/pictures/courses/white/gitlab_ci.svg";

const Page = (props) => (
  <CourseDD
    site={props.site}
    course_id="gitlab-ci"
    lang={props.site.lang}
    logo={logo}
    location="de"
    show_sessions={true}
    hide_prices={true}
  />
);

export default Page;
