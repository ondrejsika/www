import React from "react";
import styled from "styled-components";
import StaticDB from "@app/common/staticdb";
import Translate from "@app/common/components/Translate";
import sessions_file from "@app/data/training/sessions.yml";
import AddToGoogleCalendar from "@app/common/components/AddToGoogleCalendar";
import Link from "next/link";
import default_colors from "@app/ondrejsika-theme/config/colors";
import Button from "@app/ondrejsika-theme/components/Button";
import {
  FaRegCalendarPlus,
  FaLinkedinIn,
  FaFacebookSquare
} from "react-icons/fa";

const DesktopView = styled.div`
  @media (max-width: 690px) {
    display: none;
  }
`;

const MobileView = styled.div`
  @media (min-width: 690px) {
    display: none;
  }
`;

const Session = styled.div`
  padding: 0.5em 0;
`;

const date_for_google_calendar_link = dd_mm_yyyy =>
  dd_mm_yyyy
    .split(".")
    .reverse()
    .map(x => (x.length == 1 ? `0${x}` : x))
    .join("");

const UpcomingSessions = props => {
  const A = styled.a`
    padding-left: 1.5em;
    color: ${(props.site && props.site.colors && props.site.colors.PRIMARY) ||
      default_colors.BLUE};
  `;

  let db = new StaticDB();
  db.add("sessions", sessions_file);
  db.setCursor("sessions");
  if (props.location) db.filter("country", props.location);
  if (props.course_id) db.filter("course_id", props.course_id);
  db.filter("active", true);
  if (props.limit) db.limit(props.limit);
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
    <>
      <DesktopView>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col" className="col-main">
                <Translate
                  lang={props.lang}
                  cs="NÁZEV ŠKOLENÍ"
                  en="COURSE"
                  de="BEZEICHNUNG"
                  se="TRÄNNINGSNAMN"
                />
              </th>
              <th scope="col" className="col-min">
                <Translate
                  lang={props.lang}
                  cs="MÍSTO"
                  en="VENUE"
                  de="ORT"
                  se="MÖTESPLATS"
                />
              </th>
              <th scope="col" className="col-min">
                <Translate
                  lang={props.lang}
                  cs="DATUM"
                  en="DATE"
                  de="DATUM"
                  se="DATUM"
                />
              </th>
              <th scope="col" className="col-min">
                <Translate
                  lang={props.lang}
                  cs="CENA"
                  en="PRICE"
                  de="PREIS"
                  se="PRIS"
                />
              </th>
              <th scope="col" className="col-min">
                <Translate
                  lang={props.lang}
                  cs="DÉLKA"
                  en="LEGTH"
                  de="DAUER"
                  se="KURSLÄNGD"
                />
              </th>
              <th />
              <th />
              <th />
              {!props.hide_add_to_google_calendar && <th />}
            </tr>
          </thead>
          <tbody>
            {sessions.map((course, i) => {
              let flag = { en: "🇬🇧", de: "🇩🇪", se: "🇸🇪", cs: "🇨🇿" }[
                course.lang
              ];

              return (
                <tr key={i}>
                  <td scope="row">
                    {(() => {
                      if (props.show_session_link)
                        return (
                          <Link href={`/${session_page_prefix}/${course.id}`}>
                            <a>
                              {course.name} {flag}
                            </a>
                          </Link>
                        );
                      if (props.show_course_link)
                        return (
                          <Link
                            href={`/${course_page_prefix}/${course.course_id}`}
                          >
                            <a>
                              {course.name} {flag}
                            </a>
                          </Link>
                        );
                      return (
                        <span>
                          {course.name} {flag}
                        </span>
                      );
                    })()}
                  </td>
                  <td>{course.city}</td>
                  <td>
                    {course.date_from != course.date_to
                      ? course.date_from + ` - ` + course.date_to
                      : course.date_from}
                  </td>
                  <td>{course.price}</td>
                  <td>{course.length}</td>
                  <td scope="row">
                    <Button
                      site={props.site}
                      size="big"
                      href={`/${session_page_prefix}/${course.id}#register`}
                    >
                      <Translate
                        lang={props.lang}
                        cs="Registrovat"
                        en="Register"
                        de="Registrieren"
                        se="Fråga efter en träning"
                      />
                    </Button>
                  </td>
                  <td scope="row">
                    {course.facebook_event && (
                      <A
                        href={course.facebook_event}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookSquare />
                      </A>
                    )}
                  </td>
                  <td scope="row">
                    {course.linkedin_event && (
                      <A
                        href={course.linkedin_event}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn />
                      </A>
                    )}
                  </td>
                  {!props.hide_add_to_google_calendar && (
                    <td scope="row">
                      <AddToGoogleCalendar
                        A={A}
                        name={`${course.name} - Ondrej Sika`}
                        location={course.city}
                        from={date_for_google_calendar_link(course.date_from)}
                        to={date_for_google_calendar_link(course.date_to)}
                      >
                        <FaRegCalendarPlus />
                      </AddToGoogleCalendar>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </DesktopView>

      <MobileView>
        {sessions.map((course, i) => {
          return (
            <Session key={i}>
              <p>
                {course.date_from != course.date_to
                  ? course.date_from + ` - ` + course.date_to
                  : course.date_from}
                <br />
                delka: {course.length}
                <br />
                cena: {course.price}
              </p>
              <Button
                site={props.site}
                size="big"
                href={`/${session_page_prefix}/${course.id}#register`}
              >
                <Translate
                  lang={props.lang}
                  cs="Registrovat"
                  en="Register"
                  de="Registrieren"
                  se="Fråga efter en träning"
                />
              </Button>
              <span>
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
              </span>
            </Session>
          );
        })}
      </MobileView>
    </>
  );
};

export default UpcomingSessions;
