import React from "react";

import Article from "@app/ondrejsika-theme/layouts/Article";
import SessionRegisterForm from "@app/ondrejsika-theme/layouts/SessionRegisterForm";

import sessions from "@app/data/training/sessions.yml";

let session_id_map = {};
sessions.map((element, i) => {
  session_id_map[element.id] = i;
});

const SessionDD = props => {
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
      >
        <h2>Registrovat na skoleni</h2>
        <div className="row">
          <div className="col-md-4">
            <SessionRegisterForm
              site={props.site}
              organizer_id={null}
              session_id={null}
              organizer_slug="ondrejsika"
              session_slug={session.id}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <h2>Datum a misto konani</h2>
            <h2>Lektor</h2>
            <h2>Nazory ucastniky</h2>
          </div>
          <div className="col-md-5">
            <h2>Registrace</h2>
          </div>
        </div>
      </Article>
    </>
  );
};

export default SessionDD;
