import Course from "@app/ondrej-sika.cz/layouts/Course";

export default props => (
  <Course
    lang={props.site.lang}
    course_title="Školení Terraform"
    logo="/static/terraform-color.png"
    price_self_funded="3 999 CZK"
    price_company_funded="7 999 CZK"
    price_in_house="25 000 CZK"
  >
    <div className="alert alert-danger mt-5" role="alert">
      <h2>Pripravuji ...</h2>
      Na kurzu momentalne pracuji, pokud mate zajem, napiste mi email nebo
      vyplnte poptavku. Ozvu se Vam.
    </div>
  </Course>
);
