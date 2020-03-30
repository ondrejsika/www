import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import UpcomingSessions from "@app/ondrejsika-theme/components/UpcomingSessions";

import Head from "next/head";

const Index = props => (
  <div>
    <Head>
      <title>Public Sessions - Trainera.de</title>
    </Head>
    <MainBar site={props.site} header="Public Sessions" />
    <div className="container pt-4">
      <UpcomingSessions
        lang={props.site.lang}
        location="de"
        show_course_link={true}
      />
    </div>
  </div>
);

export default Index;
