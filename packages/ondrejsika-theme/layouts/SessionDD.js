import React from "react";
import { Row } from "react-bootstrap";
import Article from "@app/ondrejsika-theme/layouts/Article";
import SessionRegisterForm from "@app/ondrejsika-theme/layouts/SessionRegisterForm";

import sessions from "@app/data/training/sessions.yml";
import AboutLecturer from "../components/AboutLecturer";

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
            <h2>Místo konání</h2>
            <ul>
              <li>online</li>
              <li>nebo misto konkretni</li>
            </ul>
            <AboutLecturer lang={props.lang} />
            <p>
              pokud se chcete dozvedet vic podivejste se a stranku primo skoleni
              <br />- link na stranku primo skoleni
            </p>
            <h2>Co Vás naučím - body</h2>
            <h2>Cena za školení</h2>
            <p>Otevřený termín: 6 800 CZK bez DPH</p>
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
