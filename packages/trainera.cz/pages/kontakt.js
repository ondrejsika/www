import React from "react";

import Head from "next/head";
import MainBar from "@app/ondrejsika-theme/components/MainBar";

const Index = props => (
  <div>
    <Head>
      <title>Kontakty - Trainera s.r.o.</title>
    </Head>
    <MainBar site={props.site} header="Kontakt" />
    <div className="container">
      <h3 className="pt-4 pb-2">Trainera s.r.o.</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <p className="">
            <a href="mailto:sales@trainera.io?subject=Poptavka skoleni">
              sales@trainera.io
            </a>{" "}
            (Poptávky školení)
            <br />
            <a href="mailto:info@trainera.io">info@trainera.io</a> (Ostatní)
          </p>
          <p className="pb-4">
            <a href="https://www.linkedin.com/company/traineraio">
              linkedin.com/company/traineraio
            </a>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <h4>Fakturační údaje</h4>
          <p>
            Bělehradská 858/23
            <br />
            120 00 Praha 2
            <br />
            Česká Republika
          </p>
          <table className="contact-table table-borderless">
            <tbody>
              <tr>
                <td>IČ:</td>
                <td>08591491</td>
              </tr>
              <tr>
                <td>DIČ:</td>
                <td>CZ08591491 (neplatce DPH)</td>
              </tr>
              <tr>
                <td>Účet:&nbsp;&nbsp;&nbsp;</td>
                <td>2801705982/2010 (Fio)</td>
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
                <td>2801705982 / 2010</td>
              </tr>
              <tr>
                <td>SK (EUR):</td>
                <td>2801705982 / 8330</td>
              </tr>
              <tr>
                <td>IBAN:</td>
                <td>CZ4920100000002801705982</td>
              </tr>
              <tr>
                <td>BIC / SWIFT:</td>
                <td>FIOBCZPPXXX</td>
              </tr>
              <tr>
                <td className="pt-3" valign="top">
                  Adresa&nbsp;Banky:&nbsp;&nbsp;&nbsp;
                </td>
                <td className="pt-3">
                  Fio banka, a.s.,
                  <br />
                  V Celnici 1028/10,
                  <br />
                  Praha 1,
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
