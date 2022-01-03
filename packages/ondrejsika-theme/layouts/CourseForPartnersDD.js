import React from "react";
import Link from "next/link";
import Article from "@app/ondrejsika-theme/layouts/Article";
import courses_yaml from "@app/data/training/courses.yml";
import StaticDB from "@app/common/staticdb";
import Markdown from "@app/common/components/Markdown";

const CourseDD = props => {
  let course_id = props.course_id;
  let lang = props.lang;
  let location = props.location;

  let db = new StaticDB();
  db.add("courses", courses_yaml);
  db.setCursor("courses");
  db.filter("id", course_id);
  let course = db.getOne();

  let course_name = course.name[lang];
  let price_open = course.price.open[location];
  let price_in_house = course.price.in_house[location];
  let description = course.description[lang];

  return (
    <Article
      title={course_name}
      subheader="Informace pro partnery"
      hideNewsletter={true}
    >
      <p className="alert alert-danger">
        Prosim, nechte moje texy prepsat Vasim copywriterem pro vase i moje SEO.
        Diky.
      </p>
      <h2>Moje cena za osobu na otevrenem skoleni</h2>
      <div className="mb-5">
        <Markdown source={price_open} />
      </div>
      <h2>Moje cena za firmu na in-house skoleni</h2>
      <div className="mb-5">
        <Markdown source={price_in_house} />
      </div>
      <h2>Lektor</h2>
      <div className="border p-4 mt-3 mb-5">
        <h4>Ondrej Sika</h4>
        <p>
          Jsem freelance DevOps konzultant a lektor. Zlepšuji práci vývojářských
          týmu zaváděním efektivních procesů ve vývoji. Naučím Vás používat
          prověřené nástroje a technologie, které povedou k rychlejšímu vývoji a
          bezpečnějšímu provozu vašeho software.
        </p>
        <h4>Fotografie</h4>
        <p>
          Vsechny fotky najdete zde{" "}
          <Link href="/media">
            <a>https://ondrej-sika.cz/media</a>
          </Link>
        </p>
      </div>

      <h2>Osnova a detailni popis</h2>
      <div className="border p-4 mt-3">
        <Markdown source={description} />
      </div>
    </Article>
  );
};

export default CourseDD;
