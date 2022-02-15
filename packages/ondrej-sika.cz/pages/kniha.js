import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import img from "@app/data/pictures/kniha/kniha_v2_400px.png";
import ChciKnihuForm from "@app/ondrejsika-theme/components/ChciKnihuForm";
import updates from "@app/ondrej-sika.cz/data/kniha-updates.yml";
import Head from "next/head";

const liStyle = {
  fontSize: "1.7rem"
};

const Install = props => (
  <div>
    <Head>
      <title>DevOps Kniha - Ondrej Sika</title>
    </Head>
    <MainBar
      header={
        <center>
          První česká kniha o <b style={{ color: "#c8bfb0" }}>DevOps</b>
        </center>
      }
    />
    <div className="container pt-5 pb-4 ">
      <div className="row">
        <div className="col-lg-4">
          <img src={img.src} className="img img-fluid pb-5" />
        </div>
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
          <div className="text-center alert-success p-4 mt-5 mb-4 rounded">
            <p>Zanechte mi email a já vám budu posílat update ke knize</p>
            <div className="row justify-content-center align-items-center">
              <ChciKnihuForm site={props.site} />
            </div>
          </div>
          <h1 className="mt-5">Obsah</h1>
          <p className="h2 mt-4">
            <ul>
              <li style={liStyle}>Úvod do DevOps a proč by Vás mělo zajímat</li>
              <li style={liStyle}>Kultura DevOps</li>
              <li style={liStyle}>Moderní DevOps Stack</li>
              <li style={liStyle}>Jak navrhnout moderní DevOps architekturu</li>
              <li style={liStyle}>
                Kontejnery, Kubernetes, Terraform, ... deep dive
              </li>
              <li style={liStyle}>Vyhody public cloudů i on-premise</li>
              <li style={liStyle}>Automatizace a GitOps</li>
              <li style={liStyle}>Mnoho příkladů a ukázek</li>
            </ul>
          </p>
          <h1 className="mt-5">Objednat</h1>
          <p className="h2 mt-2">
            Pokud máte o knihu zájem,
            <br />
            přijímam předobjednávky emailem na{" "}
            <a href="mailto:ondrej@sika.io?subject=Kniha" className="h2">
              ondrej@sika.io
            </a>
            .
          </p>
          <h2 className="mt-5">Aktualizace</h2>
          {updates.map((update, i) => (
            <div key={i}>
              <p style={{ fontSize: "1.2rem" }}>
                <strong>{update.date_text}</strong>
                <br />
                {update.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Install;
