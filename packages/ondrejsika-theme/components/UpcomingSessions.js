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

const A = styled.a`
  padding: 1em;
  color: ${default_colors.BLUE};
`;

const date_for_google_calendar_link = dd_mm_yyyy =>
  dd_mm_yyyy
    .split(".")
    .reverse()
    .map(x => (x.length == 1 ? `0${x}` : x))
    .join("");

class UpcomingSessions extends React.Component {
  render() {
    let db = new StaticDB();
    db.add("sessions", sessions_file);
    db.setCursor("sessions");
    if (this.props.location) db.filter("country", this.props.location);
    if (this.props.course_id) db.filter("course_id", this.props.course_id);
    db.filter("active", true);
    if (this.props.limit) db.limit(this.props.limit);
    let sessions = db.get();

    let course_page_prefix = {
      cs: "skoleni",
      en: "training",
      de: "schulung"
    }[this.props.lang || "cs"];
    let session_page_prefix = {
      cs: "verejne-terminy",
      en: "upcoming-sessions",
      de: "termine"
    }[this.props.lang || "cs"];

    return (
      <>
        <DesktopView>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" className="col-main">
                  <Translate
                    lang={this.props.lang}
                    cs="NÁZEV ŠKOLENÍ"
                    en="COURSE"
                    de="BEZEICHNUNG"
                    se="TRÄNNINGSNAMN"
                  />
                </th>
                <th scope="col" className="col-min">
                  <Translate
                    lang={this.props.lang}
                    cs="MÍSTO"
                    en="VENUE"
                    de="ORT"
                    se="MÖTESPLATS"
                  />
                </th>
                <th scope="col" className="col-min">
                  <Translate
                    lang={this.props.lang}
                    cs="DATUM"
                    en="DATE"
                    de="DATUM"
                    se="DATUM"
                  />
                </th>
                <th scope="col" className="col-min">
                  <Translate
                    lang={this.props.lang}
                    cs="CENA"
                    en="PRICE"
                    de="PREIS"
                    se="PRIS"
                  />
                </th>
                <th scope="col" className="col-min">
                  <Translate
                    lang={this.props.lang}
                    cs="DÉLKA"
                    en="LEGTH"
                    de="DAUER"
                    se="KURSLÄNGD"
                  />
                </th>
                <th />
                <th />
                <th />
                {!this.props.hide_add_to_google_calendar && <th />}
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
                        if (this.props.show_session_link)
                          return (
                            <Link href={`/${session_page_prefix}/${course.id}`}>
                              <a>
                                {course.name} {flag}
                              </a>
                            </Link>
                          );
                        if (this.props.show_course_link)
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
                        size="big"
                        href={`/${session_page_prefix}/${course.id}#register`}
                      >
                        <Translate
                          lang={this.props.lang}
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
                    {!this.props.hide_add_to_google_calendar && (
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
          <h1>mobil</h1>
          {sessions.map(course => {
            let flag = { en: "🇬🇧", de: "🇩🇪", se: "🇸🇪", cs: "🇨🇿" }[course.lang];
            return (
              <>
                <p>
                  kurz:
                  {(() => {
                    if (this.props.show_session_link)
                      return (
                        <Link href={`/${session_page_prefix}/${course.id}`}>
                          <a>
                            {course.name} {flag}
                          </a>
                        </Link>
                      );
                    if (this.props.show_course_link)
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
                  -
                  {course.date_from != course.date_to
                    ? course.date_from + ` - ` + course.date_to
                    : course.date_from}
                  <br />
                  delka: {course.length}
                  <br />
                  cena: {course.price}
                </p>
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
                  {!this.props.hide_add_to_google_calendar && (
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
                  <Button
                    size="big"
                    href={`/${session_page_prefix}/${course.id}#register`}
                  >
                    <Translate
                      lang={this.props.lang}
                      cs="Registrovat"
                      en="Register"
                      de="Registrieren"
                      se="Fråga efter en träning"
                    />
                  </Button>
                </span>

                <hr />
              </>
            );
          })}
        </MobileView>
      </>
    );
  }
}

export default UpcomingSessions;
