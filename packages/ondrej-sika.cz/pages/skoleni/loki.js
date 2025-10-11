import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";
import logo from "@app/data/pictures/technologies/loki.png";

const Page = (props) => (
  <CourseDD
    site={props.site}
    course_id="loki"
    lang={props.site.lang}
    location="cz"
    show_sessions={true}
    logo={logo}
  />
);

export default Page;
