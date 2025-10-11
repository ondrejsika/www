import SessionDD from "@app/ondrejsika-theme/layouts/SessionDD";
const yaml = require("js-yaml");
const fs = require("fs");

let Page = (props) => (
  <SessionDD site={props.site} session_id={props.session_id} />
);

export async function getStaticProps(context) {
  return {
    props: {
      session_id: context.params.id,
    },
  };
}

export async function getStaticPaths() {
  const sessions = yaml.safeLoad(
    fs.readFileSync("../data/training/sessions.yml", "utf8")
  );

  const paths = sessions.map((session) => ({
    params: { id: session.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Page;
