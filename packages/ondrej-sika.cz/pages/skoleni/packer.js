import React from "react";
import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";

const Page = props => (
  <CourseDD
    site={props.site}
    course_id="packer"
    lang={props.site.lang}
    logo={null}
    location="cz"
    show_sessions={true}
  />
);

export default Page;
