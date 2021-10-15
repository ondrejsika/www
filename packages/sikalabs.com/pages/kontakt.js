import React from "react";
import Head from "next/head";
import MainBar from "@app/ondrejsika-theme/components/MainBar";

const Index = () => (
  <div>
    <Head>
      <title>Kontakty - SikaLabs s.r.o.</title>
    </Head>
    <MainBar header="Kontakt" />
    <div className="container">
      <h3 className="pt-4 pb-2">SikaLabs s.r.o.</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <p className="">
            <a href="mailto:hello@sikalabs.com">hello@sikalabs.com</a>
          </p>
          <p className="pb-4">
            <a href="https://www.linkedin.com/company/sikalabs">
              www.linkedin.com/company/sikalabs
            </a>
          </p>
          <p className="pb-4">
            Datová schránka: <b>????????????</b>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <h4>Fakturační údaje</h4>
          <p>
            ????????????
            <br />
            ????????????
            <br />
            Česká Republika
          </p>
          <table className="contact-table table-borderless">
            <tbody>
              <tr>
                <td>IČ:</td>
                <td>????????????</td>
              </tr>
              <tr>
                <td>DIČ:</td>
                <td>????????????</td>
              </tr>
              <tr>
                <td>Účet:&nbsp;&nbsp;&nbsp;</td>
                <td>????????????/????</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-4 col-md-9 col-sm-12 col-12">
          <h4 className="pt-4 pt-md-0">Platební údaje</h4>
          <table className="contact-table table-borderless">
            <tbody>
              <tr>
                <td>ČR (CZK):</td>
                <td>???????????? / ????</td>
              </tr>
              <tr>
                <td>SK (EUR):</td>
                <td>???????????? / ????</td>
              </tr>
              <tr>
                <td>IBAN:</td>
                <td>????????????</td>
              </tr>
              <tr>
                <td>BIC / SWIFT:</td>
                <td>????????????</td>
              </tr>
              <tr>
                <td className="pt-3" valign="top">
                  Adresa&nbsp;Banky:&nbsp;&nbsp;&nbsp;
                </td>
                <td className="pt-3">
                  ????????????,
                  <br />
                  ????????????,
                  <br />
                  ????????????,
                  <br />
                  Česká Republika
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
