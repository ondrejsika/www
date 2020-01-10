import CourseDD from "@app/ondrej-sika.cz/layouts/CourseDD";
import logo from "@app/data/pictures/courses/git.svg";

export default props => (
  <CourseDD
    course_id="git"
    lang={props.site.lang}
    logo={logo}
    location="cz"
    show_sessions={true}
  />
);
