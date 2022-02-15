import React from "react";
import Course from "@app/ondrejsika-theme/layouts/Course";
import courses_yaml from "@app/data/training/courses.yml";
import StaticDB from "@app/common/staticdb";
import Page404 from "@app/ondrejsika-theme/components/Page404";

const CourseDD = (props) => {
  let course_id = props.course_id;
  let lang = props.lang;
  let location = props.location;
  let logo = props.logo;
  let show_sessions = props.show_sessions;
  let hide_prices = props.hide_prices;

  let db = new StaticDB();
  db.add("courses", courses_yaml);
  db.setCursor("courses");
  db.filter("id", course_id);
  let course = db.getOne();

  if (!course) {
    return <Page404 site={props.site} />;
  }

  let course_name = course.name[lang];
  let price_open = course.price.open[location];
  let price_in_house = course.price.in_house[location];
  let twitter_recommendations = course.twitter_recommendations[lang];
  let description = course.description[lang];
  let recommendations = course.recommendations[lang];

  return (
    <Course
      site={props.site}
      course_id={course_id}
      show_sessions={show_sessions}
      lang={lang}
      course_title={course_name}
      logo={logo}
      price_self_funded={price_open}
      price_in_house={price_in_house}
      location={location}
      description={description}
      col1={null}
      col2={null}
      recommendations={recommendations}
      twitter_recommendations={twitter_recommendations}
      hide_prices={hide_prices}
    />
  );
};

export default CourseDD;
