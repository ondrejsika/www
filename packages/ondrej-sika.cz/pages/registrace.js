import React from "react";
import "@app/ondrej-sika.cz/css";

import Header from "@app/ondrej-sika.cz/components/Header";
import TextArea from "@app/ondrej-sika.cz/components/TextArea";
import Former2 from "@app/common/components/Former2";
import site from "@app/ondrej-sika.cz/config";

import Head from "next/head";

export const Registration = () => (
  <div>
    <Head>
      <title>Registrace na Školení - Ondřej Šika</title>
    </Head>
    <Header websiteHeader="Registrace na Školení" />
    <div className="container course-page">
      <TextArea TextParagraph="Pole označené * jsou povinné.">
        <Former2
          site={site}
          name="Course Registration"
          redirect_path="/odeslano"
        >
          <input type="hidden" id="form-session" name="course" />
          <div className="form-group">
            <div className="col-md-4 mb-3 pl-0">
              <label htmlFor="validationDefault01">Jmeno</label>
              <input
                type="text"
                className="form-control-border"
                id="validationDefault01"
                name="name"
                placeholder="Jmeno"
                required
              />
            </div>
            <div className="col-md-4 mb-3 pl-0">
              <label htmlFor="validationDefault02">Společnost</label>
              <input
                type="text"
                className="form-control-border"
                id="validationDefault02"
                name="company"
                placeholder="Společnost"
              />
            </div>
            <div className="col-md-4 mb-3 pl-0">
              <label htmlFor="validationDefault03">Email</label>
              <input
                type="email"
                className="form-control-border"
                id="validationDefault03"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="col-md-4 mb-3 pl-0">
              <label htmlFor="validationDefault04">Telefon</label>
              <input
                type="tel"
                className="form-control-border"
                id="validationDefault04"
                name="phone"
                placeholder="Telefon"
                required
              />
            </div>
          </div>
          <button className="btn btn-succes mb-4" type="submit">
            Registrovat se na kurz
          </button>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            document.getElementById("form-session").value = location.search;
          `
            }}
          />
        </Former2>
      </TextArea>
    </div>
  </div>
);
export default Registration;
