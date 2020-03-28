import React from "react";

import Article from "@app/ondrejsika-theme/layouts/Article";

import sessions from "@app/data/training/sessions.yml";

let session_id_map = {};
sessions.map((element, i) => {
  session_id_map[element.id] = i;
});

let Page = props => {
  let session = sessions[session_id_map[props.session_id]];
  if (!session) {
    return <></>;
  }
  return (
    <>
      <Article
        title={`${session.name} ${session.city} - Ondrej Sika`}
        header={`${session.name} ${session.city}`}
        subheader={
          session.date_from == session.date_to
            ? `Termín školení ${session.date_from}`
            : `Termín školení od ${session.date_from} do ${session.date_to}`
        }
        hideNewsletter={true}
      ></Article>
    </>
  );
};

Page.getInitialProps = async function(context) {
  return { session_id: context.query.id };
};

export default Page;
