import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";
import Link from "next/link";
import courses_yaml from "@app/data/training/courses.yml";

const Page = props => (
  <Article title="Seznam všech mých školení" hideNewsletter={true}>
    <table className="table">
      <tr>
        <th>Školení</th>
        <th>Délka</th>
        <th>Cena (otevreny termin)</th>
        <th>Cena (in house)</th>
      </tr>
      {courses_yaml.map((course, i) => (
        <tr key={i}>
          <td>
            <Link href={`/skoleni/${course.id}`}>
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
      ))}
    </table>
  </Article>
);

export default Page;
