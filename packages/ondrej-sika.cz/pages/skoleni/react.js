import Course from "@app/ondrej-sika.cz/layouts/Course";

export default () => (
  <Course
    course_title="Školení React"
    logo="/static/react.svg"
    price_self_funded="9 999 CZK"
    price_company_funded="14 999 CZK"
    price_in_house="40 000 CZK"
  >
    <div className="alert alert-danger mt-5" role="alert">
      <h2>Pripravuji ...</h2>
      Na kurzu momentalne pracuji, pokud mate zajem, napiste mi email nebo
      vyplnte poptavku. Ozvu se Vam.
    </div>
  </Course>
);
