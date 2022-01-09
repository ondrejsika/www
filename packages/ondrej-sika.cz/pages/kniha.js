import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import img from "@app/data/pictures/kniha/kniha_v1_400px.jpg";

import Head from "next/head";

const Install = () => (
  <div>
    <Head>
      <title>DevOps Kniha - Ondrej Sika</title>
    </Head>
    <MainBar header="DevOps Kniha" />
    <div className="container pt-5 pb-4 ">
      <div className="row">
        <div className="col-8">
          <p className="h2">
            Píši Knihu o DevOps, brzy bude více informací. Pokud chcete dostávat
            novinky nejen novinky o knize, přihlaste se do mého{" "}
            <a href="https://sika.link/newsletter" className="h2">
              newsletteru
            </a>
            .
          </p>
          <p className="h2 mt-5">
            Pokud máte o knihu zajem přijímam předobjednávky emailem na{" "}
            <a href="mailto:ondrej@sika.io?subject=Kniha" className="h2">
              ondrej@sika.io
            </a>
            .
          </p>
        </div>

        <div className="col-4">
          <img src={img} className="img img-fluid pb-5" />
        </div>
      </div>
    </div>
  </div>
);

export default Install;
