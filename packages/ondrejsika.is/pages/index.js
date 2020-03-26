import React from "react";
import site from "@app/ondrejsika.is/config";
import Page from "@app/ondrejsika-singlepage/layouts/Page";

const Index = () => (
  <Page
    site={site}
    site_title="Ondrej Sika 🇮🇸"
    site_header="Ondrej Sika 🇮🇸"
    site_sub_header="Software {Engineer, Consultant, Lecturer}"
    site_claim="IT &amp; DevOps Training and Consulting in Iceland"
    site_claim_text="I'm boosting effectivity & productivity of software development teams by using tools which lead to faster development and reliable operation of software products."
    statistics_bar_people="750+"
    statistics_bar_companies="70+"
    statistics_bar_courses="100+"
  ></Page>
);

export default Index;
