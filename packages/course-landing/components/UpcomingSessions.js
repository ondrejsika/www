import React from "react";
import StaticDB from "@app/common/staticdb";
import Translate from "@app/common/components/Translate";
import sessions_file from "@app/data/training/sessions.yml";
import ButtonOutline from "@app/course-landing/components/ButtonOutline";

class UpcomingSessions extends React.Component {
  render() {
    let db = new StaticDB();
    db.add("sessions", sessions_file);
    db.setCursor("sessions");
    db.filter("country", this.props.location || "cz");
    db.filter("course_id", this.props.course);
    db.filter("active", true);
    let sessions = db.get();

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col" className="col-main">
              <Translate lang={this.props.lang} cs="NÁZEV ŠKOLENÍ" />
            </th>
            <th scope="col" className="col-min">
              <Translate lang={this.props.lang} cs="MÍSTO" />
            </th>
            <th scope="col" className="col-min">
              <Translate lang={this.props.lang} cs="DATUM" />
            </th>
            <th scope="col" className="col-min">
              <Translate lang={this.props.lang} cs="CENA" />
            </th>
            <th scope="col" className="col-min">
              <Translate lang={this.props.lang} cs="DÉLKA" />
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
                <td>{course.date_from}</td>
                <td>{course.price}</td>
                <td>{course.length}</td>
                <td>
                  <ButtonOutline
                    btnUrl={`https://ondrej-sika.cz/registrace/?${course.id}`}
                  >
                    Nezávazně poptat školení
                  </ButtonOutline>
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
