import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import UpcomingSessions from "@app/ondrejsika-theme/components/UpcomingSessions";

import Head from "next/head";

import site from "@app/ondrej-sika.cz/config";

// let style = {
//   fontSize: "1.4em",
//   fontWeight: "bold"
// };

const Index = () => (
  <div>
    <Head>
      <title>Veřejné termíny - Ondrej Sika</title>
    </Head>
    <MainBar MainBarHeader="Veřejné termíny školení" />
    <div className="container pt-4">
      <UpcomingSessions
        lang={site.lang}
        location="cz"
        show_course_link={true}
      />
    </div>
  </div>
);

export default Index;
