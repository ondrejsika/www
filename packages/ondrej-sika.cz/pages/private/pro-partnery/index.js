import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";
import Link from "next/link";
import StaticDB from "@app/common/staticdb";
import courses_yaml from "@app/data/training/courses.yml";

let db = new StaticDB();
db.add("courses", courses_yaml);
db.setCursor("courses");
db.filterIn("lecturers", "ondrejsika");
let courses = db.get();

const Page = props => (
  <Article title="Seznam skoleni pro partnery" hideNewsletter={true}>
    <table className="table">
      <tr>
        <th>Školení</th>
        <th>Délka</th>
        <th>Cena (otevřený termín)</th>
        <th>Cena (in house)</th>
      </tr>
      {courses.map((course, i) => {
        if (course.ignore_for_partners) return;
        return (
          <tr key={i}>
            <td>
              <Link href={`/private/pro-partnery/${course.id}`}>
                <a>{course.name[props.site.lang]}</a>
              </Link>
            </td>
            <td>
              {course.length} {course.length == 1 ? "den" : "dny"}
            </td>
            <td>
              {course.price ? course.price.open["cz"] + " (za osobu)" : "--"}
            </td>
            <td>
              {course.price ? course.price.in_house["cz"] + " (celkem)" : "--"}
            </td>
          </tr>
        );
      })}
    </table>
  </Article>
);

export default Page;
