import CourseDD from "@app/ondrej-sika.cz/layouts/CourseDD";
import logo from "@app/data/pictures/courses/ansible.png";

export default props => (
  <CourseDD
    course_id="ansible"
    lang={props.site.lang}
    logo={logo}
    location="cz"
    show_sessions={true}
  />
);
