import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";
import logo from "@app/data/pictures/courses/gitlab-ci.svg";

export default props => (
  <CourseDD
    course_id="gitlab-ci"
    lang={props.site.lang}
    logo={logo}
    location="cz"
    show_sessions={true}
  />
);
