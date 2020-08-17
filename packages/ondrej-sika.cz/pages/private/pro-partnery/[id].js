import React from "react";
import CourseForPartnersDD from "@app/ondrejsika-theme/layouts/CourseForPartnersDD";

const Page = props => (
  <CourseForPartnersDD
    site={props.site}
    course_id={props.course_id}
    lang={props.site.lang}
    location="cz"
  />
);

Page.getInitialProps = async function(context) {
  return { course_id: context.query.id };
};

export default Page;
