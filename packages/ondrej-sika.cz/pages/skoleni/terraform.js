import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";
import logo from "@app/data/pictures/courses/terraform-color.png";

export default props => (
  <CourseDD
    course_id="terraform"
    lang={props.site.lang}
    logo={logo}
    location="cz"
    show_sessions={true}
  />
);
