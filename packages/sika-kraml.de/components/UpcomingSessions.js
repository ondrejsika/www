import React from "react";
import ButtonOutline from "@app/course-landing/components/ButtonOutline";

import StaticDB from "@app/common/staticdb";

import sessions_file from "@app/data/training/sessions.yml";

let db = new StaticDB();
db.add("sessions", sessions_file);
db.setCursor("sessions");
db.filter("country", "de");
db.filter("active", true);
let sessions = db.get();

const Translate = props => {
  return <>{props[props.lang]}</>;
};

class UpcomingSessions extends React.Component {
  render() {
    let lang = this.props.lang;

    {
      /* TODO should be merged back into ondrej-sika.cz/UpcomingSessions */
    }
    return (
      <table class="table table-hover mt-4">
        <thead>
          <tr>
            <th scope="col" className="col-main">
              <Translate lang={lang} cs="NÁZEV ŠKOLENÍ" de="BEZEICHNUNG" />
            </th>
            <th scope="col" className="col-min">
              <Translate lang={lang} cs="MÍSTO" de="ORT" />
            </th>
            <th scope="col" className="col-min">
              <Translate lang={lang} cs="DATUM" de="DATUM" />
            </th>
            <th scope="col" className="col-min">
              <Translate lang={lang} cs="CENA" de="PREIS" />
            </th>
            <th scope="col" className="col-min">
              <Translate lang={lang} cs="DÉLKA" de="DAUER" />
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {sessions.map((course, i) => {
            return (
              <tr key={i}>
                <td>{course.name}</td>
                <td>{course.city}</td>
                <td>
                  {(() => {
                    if (course.date_from != course.date_to)
                      return course.date_from + ` - ` + course.date_to;
                    return course.date_from;
                  })()}
                </td>
                <td>{course.price}</td>
                <td>{course.length}</td>
                <td>
                  <a
                    href={`/registrace?` + course.id}
                    className="btn btn-success btn-sm"
                  >
                    <Translate
                      lang={this.props.lang}
                      cs="Registrovat"
                      de="Registrieren"
                    />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default UpcomingSessions;
