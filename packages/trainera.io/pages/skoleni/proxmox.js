import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";
import logo from "@app/data/pictures/courses/proxmox-white.svg";

export default props => (
  <CourseDD
    course_id="proxmox"
    lang={props.site.lang}
    logo={logo}
    location="cz"
    show_sessions={true}
  />
);
