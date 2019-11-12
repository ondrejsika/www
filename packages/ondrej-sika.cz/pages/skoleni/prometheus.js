import Course from "@app/ondrej-sika.cz/layouts/Course";

export default props => (
  <Course
    course_id="prometheus"
    show_sessions={true}
    lang={props.site.lang}
    course_title="Školení Prometheus"
    // logo={}
    price_self_funded="5 999 CZK"
    price_in_house="25 000 CZK"
    location="cz"
  >
    <div className="alert alert-danger mt-5" role="alert">
      <h2>Pripravuji ...</h2>
      Na kurzu momentalne pracuji, pokud mate zajem, napiste mi email nebo
      vyplnte poptavku. Ozvu se Vam.
    </div>
  </Course>
);
