import React from "react";
import { Row } from "react-bootstrap";
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
        <Row>
          <div className="col-md-7">
            <h2>Datum a misto konani</h2>
            Aenean porta a massa vel mattis. Sed lacus enim, volutpat sit amet
            velit consectetur, hendrerit lacinia urna.
            <h2>Lektor</h2>
            Nulla sit amet scelerisque orci. Etiam feugiat id sem eget bibendum.
            Fusce efficitur rutrum aliquet. Duis quis aliquam odio. Maecenas
            eget orci non dolor tempor consectetur.
            <h2>Nazory ucastniky</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
            magna lorem. Duis ut convallis lacus. Curabitur vel dignissim ex,
            vitae fringilla leo. Sed blandit neque dapibus, hendrerit sem in,
            sagittis massa.
          </div>
          <div className="col-md-5">
            <h2>Registrace</h2>

            <SessionRegisterForm
              site={props.site}
              organizer_id={null}
              session_id={null}
              organizer_slug="ondrejsika"
              session_slug={session.id}
            />
          </div>
        </Row>
      </Article>
    </>
  );
};

export default SessionDD;
