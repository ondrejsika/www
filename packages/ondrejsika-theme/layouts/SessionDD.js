import React from "react";
import { Row } from "react-bootstrap";
import Article from "@app/ondrejsika-theme/layouts/Article";
import SessionRegisterForm from "@app/ondrejsika-theme/layouts/SessionRegisterForm";

import sessions from "@app/data/training/sessions.yml";
import AboutLecturer from "../components/AboutLecturer";
import Markdown from "@app/common/components/Markdown";

import StaticDB from "@app/common/staticdb";
import courses_yaml from "@app/data/training/courses.yml";
import Price from "@app/ondrejsika-theme/components/Price";

let session_id_map = {};
sessions.map((element, i) => {
  session_id_map[element.id] = i;
});

const SessionDD = props => {
  let lang = props.site.lang || "cs";

  let session = sessions[session_id_map[props.session_id]];

  let db = new StaticDB();
  db.add("courses", courses_yaml);
  db.setCursor("courses");
  db.filter("id", session.course_id);
  let course = db.getOne();

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
            <Markdown source={course.agenda[lang]} />
            <p>
              Vice informaci naleznete zde -{" "}
              <a href={`/skoleni/${session.course_id}`}>{session.name}</a>
            </p>
            <h2>Lektor</h2>
            <AboutLecturer lang={lang} />
          </div>

          <div className="col-md-5">
            <Price
              PriceHeader={"Cena za školení"}
              PriceBtn={"Nezávazně poptat školení"}
            >
              Otevřený termín {session.price} bez DPH
            </Price>

            <h2 className="pt-3">Registrace</h2>

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
