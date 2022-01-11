import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import img from "@app/data/pictures/kniha/kniha_v2_400px.png";
import ChciKnihuForm from "@app/ondrejsika-theme/components/ChciKnihuForm";

import Head from "next/head";

const Install = props => (
  <div>
    <Head>
      <title>DevOps Kniha - Ondrej Sika</title>
    </Head>
    <MainBar header="DevOps Kniha" />
    <div className="container pt-5 pb-4 ">
      <div className="row">
        <div className="col-lg-8 mb-5">
          <p className="h2">
            Píši knihu o DevOps,
            <br />
            brzy bude více informací.
            {/* Pokud chcete dostávat
            novinky nejen novinky o knize, přihlaste se do mého{" "}
            <a href="https://sika.link/newsletter" className="h2">
              newsletteru
            </a>
            . */}
          </p>
          <div className="text-center alert-success p-4 mt-4 mb-4 rounded">
            <p>Zanechte mi email a já vám budu posílat update ke knize</p>
            <div className="row justify-content-center align-items-center">
              <ChciKnihuForm site={props.site} />
            </div>
          </div>

          <p className="h2 mt-4">
            Pokud máte o knihu zájem,
            <br />
            přijímam předobjednávky emailem na{" "}
            <a href="mailto:ondrej@sika.io?subject=Kniha" className="h2">
              ondrej@sika.io
            </a>
            .
          </p>
        </div>

        <div className="col-lg-4">
          <img src={img} className="img img-fluid pb-5" />
        </div>
      </div>
    </div>
  </div>
);

export default Install;
