import React from "react";
import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";
import boundary_w from "@app/data/pictures/technologies/boundary-w.png";

const Page = (props) => (
  <CourseDD
    site={props.site}
    course_id="boundary"
    lang={props.site.lang}
    location="cz"
    show_sessions={true}
    logo={boundary_w}
  />
);

export default Page;
