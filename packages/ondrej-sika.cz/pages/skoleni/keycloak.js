import React from "react";
import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";
import logo from "@app/data/pictures/technologies/keycloak.png";

const Page = (props) => (
  <CourseDD
    site={props.site}
    course_id="keycloak"
    lang={props.site.lang}
    location="cz"
    show_sessions={true}
    logo={logo}
  />
);

export default Page;
