import CourseForPartnersDD from "@app/ondrejsika-theme/layouts/CourseForPartnersDD";
const yaml = require("js-yaml");
const fs = require("fs");

const Page = (props) => (
  <CourseForPartnersDD
    site={props.site}
    course_id={props.course_id}
    lang={props.site.lang}
    location="cz"
  />
);

export async function getStaticProps(context) {
  return {
    props: {
      course_id: context.params.id,
    },
  };
}

export async function getStaticPaths() {
  const courses = yaml.safeLoad(
    fs.readFileSync("../data/training/courses.yml", "utf8")
  );

  const paths = courses
    .filter((course) => !course.ignore_for_partners)
    .map((course) => ({
      params: { id: course.id },
    }));

  return {
    paths,
    fallback: false,
  };
}

export default Page;
