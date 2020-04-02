import React from "react";
import SessionDD from "@app/ondrejsika-theme/layouts/SessionDD";

let Page = props => (
  <SessionDD
    site={props.site}
    session_id={props.session_id}
  />
);

Page.getInitialProps = async function(context) {
  return { session_id: context.query.id };
};

export default Page;
