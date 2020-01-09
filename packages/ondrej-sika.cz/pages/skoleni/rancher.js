import CourseDD from "@app/ondrej-sika.cz/layouts/CourseDD";
import logo from "@app/data/pictures/courses/rancher-white.png";

export default props => (
  <CourseDD
    course_id="rancher"
    lang={props.site.lang}
    logo={logo}
    location="cz"
  />
);
