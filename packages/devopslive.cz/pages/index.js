import React from "react";
import CourseBar from "../components/CourseBar";

const Index = props => (
  <>
    <CourseBar title={props.title} date={props.date} text={props.text} />
  </>
);

export default Index;
