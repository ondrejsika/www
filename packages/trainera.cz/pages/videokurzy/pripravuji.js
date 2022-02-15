import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";
import { FaYoutube } from "react-icons/fa";

const Page = (props) => (
  <Article
    site={props.site}
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
        zanechte mi email
      </a>
      .
    </p>
  </Article>
);

export default Page;
