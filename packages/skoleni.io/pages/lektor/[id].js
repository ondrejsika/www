import React from "react";
import LecturerDD from "@app/skoleni.io/layouts/LecturerDD";

const Page = props => (
  <>{props.lecturer_id && <LecturerDD lecturer_id={props.lecturer_id} />}</>
);

Page.getInitialProps = async function(context) {
  return { lecturer_id: context.query.id };
};

export default Page;
