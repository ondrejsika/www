import React from "react";
import Course from "@app/skoleni.io/layouts/Course";
import logo from "@app/data/pictures/courses/elk-color.png";
import { Container } from "react-bootstrap";

const Page = props => (
  <>
    <Course
      site={props.site}
      header="Elk"
      lecturer="Ondrej Sika"
      lecturerId="ondrejsika"
      headerImg={logo}
      price_open="11 999 CZK"
      price_company_funded="14 999 CZK"
      price_in_house="50 000 CZK"
      location="cz"
    />
    <Container>
      <div className="alert alert-danger pt-4 pb-4 mt-5 mb-4" role="alert">
        <h2>Pripravuji ...</h2>
        Na kurzu momentalne pracuji, pokud mate zajem, napiste mi email nebo
        vyplnte poptavku. Ozvu se Vam.
      </div>
    </Container>
  </>
);

export default Page;
