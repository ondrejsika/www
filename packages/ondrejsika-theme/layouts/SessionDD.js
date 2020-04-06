import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Translate from "@app/common/components/Translate";
import Markdown from "@app/common/components/Markdown";

import Article from "@app/ondrejsika-theme/layouts/Article";
import SessionRegisterForm from "@app/ondrejsika-theme/layouts/SessionRegisterForm";
import sessions from "@app/data/training/sessions.yml";
import StaticDB from "@app/common/staticdb";
import courses_yaml from "@app/data/training/courses.yml";
import Price from "@app/ondrejsika-theme/components/Price";
import ondrejsika from "@app/data/pictures/ondrejsika.jpg";

const Padding = styled.div`
  padding: 1em;
`;

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
              <li>{session.city} - z duvodu COVID-19</li>
            </ul>
            <Markdown source={course.agenda[lang]} />
            <p>
              Vice informaci naleznete zde -{" "}
              <a href={`/skoleni/${session.course_id}`}>{session.name}</a>
            </p>
            <h2>Lektor: Ondrej Sika</h2>
            <Row>
              <Col md={3}>
                <img
                  src={ondrejsika}
                  className="img-fluid rounded-circle"
                  width="130"
                />
              </Col>
              <Col md={9}>
                <p>
                  <Translate
                    lang={lang}
                    cs="Jsem freelance DevOps konzultant a lektor. Zlepšuji práci
            vývojářských týmu zaváděním efektivních procesů ve vývoji.
            Naučím Vás používat prověřené nástroje a technologie, které
            povedou k rychlejšímu vývoji a bezpečnějšímu provozu vašeho
            software."
                    en="I'm a software engineer since 2009. These days, I'm focused in DevOps. I've stated with training in 2013, since then I've made more than 170 training sessions for more than 750 people. My cliets are banks, telco & large enterpises as well as startups and small companies."
                    sk="Volám sa Ondřej Šika, vyvíjam softvér pre Slush Pool a školím. Školím prevažne Docker a CI, ktorý spolu s Dockerom veľmi úzko súvisí. Ďalšie školenia nájdete na mojom webe [ondrej-sika.cz](https://ondrej-sika.cz/). Všetky kurzy vediem osobne. S Dockerom mám viac ako štyri roky skúseností v rámci komerčného vývoja softvéru. Docker používam denne vo vývoji, ale aj na produkcii a prácu bez neho si už neviem ani predstaviť."
                  />
                </p>
              </Col>
            </Row>
          </div>

          <div className="col-md-5">
            <Price
              PriceHeader={"Cena za školení"}
              PriceBtn={"Nezávazně poptat školení"}
            >
              Otevřený termín {session.price} bez DPH
            </Price>
            <Padding>
              <h2 className="pt-3">Registrace</h2>

              <SessionRegisterForm
                site={props.site}
                organizer_id={null}
                session_id={null}
                organizer_slug="ondrejsika"
                session_slug={session.id}
              />
            </Padding>
          </div>
        </Row>
      </Article>
    </>
  );
};

export default SessionDD;
