import React from "react";
import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";

const Page = (props) => (
  <CourseDD
    site={props.site}
    course_id="meta"
    lang={props.site.lang}
    location="cz"
    show_sessions={true}
  />
);

export default Page;
