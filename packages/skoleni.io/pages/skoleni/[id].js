import React from "react";
import Course from "@app/skoleni.io/layouts/Course";

const Page = props => (
  <>
    {props.course_id && (
      <Course
        course_id={props.course_id}
      />
    )}
  </>
);

Page.getInitialProps = async function(context) {
  return { course_id: context.query.id };
};

export default Page;
