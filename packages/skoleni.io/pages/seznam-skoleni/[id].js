import React from "react";
import CourseList from "@app/skoleni.io/layouts/CourseList";

const Page = (props) => (
  <>
    {props.technology_id && <CourseList technology_id={props.technology_id} />}
  </>
);

Page.getInitialProps = async function (context) {
  return { technology_id: context.query.id };
};

export default Page;
