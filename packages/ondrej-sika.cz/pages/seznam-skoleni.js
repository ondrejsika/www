import CourseListPage from "@app/ondrejsika-theme/components/CourseListPage";

const Page = (props) => (
  <CourseListPage
    lecturer="ondrejsika"
    lang={props.site.lang}
    title="Seznam všech mých školení"
  />
);

export default Page;
