import React from "react";
import StaticDB from "@app/common/staticdb";
import Translate from "@app/common/components/Translate";
import sessions_file from "@app/data/training/sessions.yml";
import AddToGoogleCalendar from "@app/common/components/AddToGoogleCalendar";

const date_for_google_calendar_link = dd_mm_yyyy =>
  dd_mm_yyyy
    .split(".")
    .reverse()
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

    let site_name = this.props.site_name || "ondrej-sika";
    let inquiry_email = this.props.inquiry_email || "ondrej@sika.io";

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col" className="col-main">
              <Translate
                lang={this.props.lang}
                cs="NÁZEV ŠKOLENÍ"
                en="COURSE"
              />
            </th>
            <th scope="col" className="col-min">
              <Translate lang={this.props.lang} cs="MÍSTO" en="VENUE" />
            </th>
            <th scope="col" className="col-min">
              <Translate lang={this.props.lang} cs="DATUM" en="DATE" />
            </th>
            <th scope="col" className="col-min">
              <Translate lang={this.props.lang} cs="CENA" en="PRICE" />
            </th>
            <th scope="col" className="col-min">
              <Translate lang={this.props.lang} cs="DÉLKA" en="LEGTH" />
            </th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {sessions.map((course, i) => {
            return (
              <tr key={i}>
                <td scope="row">{course.name}</td>
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
                <td scope="row">
                  <a
                    href={`mailto:${inquiry_email}?subject=[${site_name}] Request for Training: ${course.name}, ${course.date_from} (${course.id})`}
                    className="btn btn-success btn-sm"
                  >
                    <Translate
                      lang={this.props.lang}
                      cs="Registrovat"
                      en="Register"
                    />
                  </a>
                </td>
                <td scope="row">
                  <AddToGoogleCalendar
                    name={`${course.name} - Ondrej Sika`}
                    location={course.city}
                    from={date_for_google_calendar_link(course.date_from)}
                    to={date_for_google_calendar_link(course.date_to)}
                  >
                    <a className="btn btn-primary btn-sm" target="_blank">
                      <Translate
                        lang={this.props.lang}
                        cs="Do&nbsp;kalendare"
                        en="Add&nbsp;to&nbsp;Calendar"
                      />
                    </a>
                  </AddToGoogleCalendar>
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
