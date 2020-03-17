import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";
import logo from "@app/data/pictures/courses/prometheus-white.png";

export default props => (
  <CourseDD
    course_id="prometheus"
    lang={props.site.lang}
    logo={logo}
    location="cz"
    show_sessions={true}
  />
);
