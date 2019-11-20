import React from "react";
import StaticDB from "@app/common/staticdb";
import Translate from "@app/common/components/Translate";
import sessions_file from "@app/data/training/sessions.yml";

class UpcomingSessions extends React.Component {
  render() {
    let db = new StaticDB();
    db.add("sessions", sessions_file);
    db.setCursor("sessions");
    db.filter("country", this.props.location || "cz");
    db.filter("course_id", this.props.course);
    db.filter("active", true);
    db.limit(3);
    let sessions = db.get();

    let site_name = this.props.site_name || "course-landing";
    let inquiry_email = this.props.inquiry_email || "ondrej@sika.io";

    return (
      <table className="table table-hover">
        <tbody>
          {sessions.map((course, i) => {
            return (
              <tr key={i}>
                <td>{course.name}</td>
                <td>{course.city}</td>
                <td>{course.date_from}</td>
                <td>{course.price}</td>
                <td>{course.length}</td>
                <td>
                  <a
                    href={`mailto:${inquiry_email}?subject=[${site_name}] Request for Training: ${course.name} ${course.date_from} (${course.id})`}
                    className="btn mybutton-outline btn-sm"
                  >
                    <Translate
                      lang={this.props.lang}
                      cs="Registrovat"
                      en="Register"
                      de="Registrieren"
                      se="Fråga efter en träning"
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
