import CourseDD from "@app/ondrej-sika.cz/layouts/CourseDD";
import logo from "@app/data/pictures/courses/proxmox-white.svg";

export default props => (
  <CourseDD
    course_id="proxmox"
    lang={props.site.lang}
    logo={logo}
    location="cz"
  />
);
