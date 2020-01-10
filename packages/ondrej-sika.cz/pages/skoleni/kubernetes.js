import CourseDD from "@app/ondrej-sika.cz/layouts/CourseDD";
import logo from "@app/data/pictures/courses/kubernetes.png";

export default props => (
  <CourseDD
    course_id="kubernetes"
    lang={props.site.lang}
    logo={logo}
    location="cz"
    show_sessions={true}
  />
);
