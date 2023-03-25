import React from "react";
import Course from "@app/ondrejsika-theme/layouts/Course";
import logo from "@app/data/pictures/courses/elk-color.png";

const Page = (props) => (
  <Course
    site={props.site}
    course_id="react"
    show_sessions={true}
    lang={props.site.lang}
    course_title="Školení ELK / EFK"
    logo={logo}
    price_self_funded="11 999 CZK"
    price_company_funded="14 999 CZK"
    price_in_house="64 000 CZK"
    location="cz"
    hide_prices={true}
  >
    <div className="alert alert-danger mt-5" role="alert">
      <h2>Připravuji ...</h2>
      Na kurzu momentálně pracuji, pokud máte zájem, napište mi email anebo
      vyplňte poptávku. Ozvu se Vám.
    </div>
  </Course>
);

export default Page;
