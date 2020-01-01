import Article from "@app/ondrej-sika.cz/layouts/Article";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

import docker from "@app/data/pictures/courses/video/docker-screenshot.png";
import kubernetes from "@app/data/pictures/courses/video/kubernetes-screenshot.png";
import terraform from "@app/data/pictures/courses/video/terraform-screenshot.png";
import gitlabCi from "@app/data/pictures/courses/video/gitlab-ci-screenshot.png";

export default () => (
  <Article
    title="Videokurzy"
    header={
      <>
        Videokurzy <FaYoutube />
      </>
    }
  >
    <div className="alert alert-danger mt-3" role="alert">
      <h2>Work in Progress ...</h2>
    </div>

    <p style={{ fontSize: "1.2em" }}>
      Na video kurzech pracuji a jsou těsně před spuštěním. Pokud chcete napsat
      až budou venku,{" "}
      <a
        href="https://airtable.com/embed/shrIKXtFAlneUeI2e"
        style={{ fontSize: "1em" }}
      >
        nechte mě email
      </a>
      .
    </p>
  </Article>
);
