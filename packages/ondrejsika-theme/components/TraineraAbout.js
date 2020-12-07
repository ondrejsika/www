import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import StaticDB from "@app/common/staticdb";
import Translate from "@app/common/components/Translate";
import sessions_file from "@app/data/training/sessions.yml";
import AddToGoogleCalendar from "@app/common/components/AddToGoogleCalendar";
import Button from "@app/ondrejsika-theme/components/Button";
import Link from "next/link";
import {
  FaRegCalendarPlus,
  FaLinkedinIn,
  FaFacebookSquare
} from "react-icons/fa";

const CourseName = styled.a`
  font-size: 3em;
`;
const Block = styled.div`
  margin: 2em 0;
`;

const Hr = styled.hr`
  &:last-child {
    display: none;
  }
`;

const date_for_google_calendar_link = dd_mm_yyyy =>
  dd_mm_yyyy
    .split(".")
    .reverse()
    .map(x => (x.length == 1 ? `0${x}` : x))
    .join("");

const Page = props => {
  let link_site_prefix = props.link_site_prefix || "";

  const A = styled.a`
    padding-left: 1.5em;
  `;
  let db = new StaticDB();
  db.add("sessions", sessions_file);
  db.setCursor("sessions");
  if (props.location) db.filter("country", props.location);
  if (props.course_id) db.filter("course_id", props.course_id);
  db.filter("active", true);
  db.limit(3);
  let sessions = db.get();

  let course_page_prefix = {
    cs: "skoleni",
    en: "training",
    de: "schulung"
  }[props.lang || "cs"];
  let session_page_prefix = {
    cs: "verejne-terminy",
    en: "upcoming-sessions",
    de: "termine"
  }[props.lang || "cs"];

  return (
    <div className="mt-5 mb-4">
      {sessions.map((course, i) => {
        let flag = { en: "🇬🇧", de: "🇩🇪", se: "🇸🇪", cs: "🇨🇿" }[course.lang];
        return (
          <>
            <Block key={i}>
              <Row>
                <Col md={8}>
                  <p>
                    {course.date_from != course.date_to
                      ? course.date_from + ` - ` + course.date_to
                      : course.date_from}{" "}
                  </p>

                  {props.show_session_link ? (
                    <Link
                      href={`${link_site_prefix}/${session_page_prefix}/${course.id}`}
                    >
                      <CourseName>
                        {course.name} {flag}
                      </CourseName>
                    </Link>
                  ) : (
                    <Link
                      href={`${link_site_prefix}/${course_page_prefix}/${course.course_id}`}
                    >
                      <CourseName>
                        {course.name} {flag}
                      </CourseName>
                    </Link>
                  )}
                  {/* <div style={{ alignSelf: "flex-end" }}> */}
                  <p>
                    <b>{course.price}</b>
                  </p>
                  {/* </div> */}
                </Col>
                <Col md={4} style={{ textAlign: "end" }}>
                  <div>
                    {course.facebook_event && (
                      <A
                        href={course.facebook_event}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookSquare />
                      </A>
                    )}
                    {course.linkedin_event && (
                      <A
                        href={course.linkedin_event}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn />
                      </A>
                    )}
                    {!props.hide_add_to_google_calendar && (
                      <AddToGoogleCalendar
                        A={A}
                        name={`${course.name} - Ondrej Sika`}
                        location={course.city}
                        from={date_for_google_calendar_link(course.date_from)}
                        to={date_for_google_calendar_link(course.date_to)}
                      >
                        <FaRegCalendarPlus />
                      </AddToGoogleCalendar>
                    )}
                  </div>
                  <div className="mt-5">
                    <Button
                      site={props.site}
                      size="big"
                      href={`${link_site_prefix}/${session_page_prefix}/${course.id}#register`}
                    >
                      <Translate
                        lang={props.site.lang}
                        cs="Registrovat"
                        sk="Registrovať"
                        en="Register"
                        de="Registrieren"
                        se="Fråga efter en träning"
                      />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Block>
            <Hr />
          </>
        );
      })}
    </div>
  );
};

export default Page;
