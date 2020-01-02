import Course from "@app/ondrej-sika.cz/layouts/Course";
import logo from "@app/data/pictures/courses/elk-color.png";

export default props => (
  <Course
    course_id="react"
    show_sessions={true}
    lang={props.site.lang}
    course_title="Školení ELK / EFK"
    logo={logo}
    price_self_funded="11 999 CZK"
    price_company_funded="14 999 CZK"
    price_in_house="50 000 CZK"
    location="cz"
  >
    <div className="alert alert-danger mt-5" role="alert">
      <h2>Pripravuji ...</h2>
      Na kurzu momentalne pracuji, pokud mate zajem, napiste mi email nebo
      vyplnte poptavku. Ozvu se Vam.
    </div>
  </Course>
);
