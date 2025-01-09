import React from "react";

import Head from "next/head";
import Link from "next/link";
import MainBar from "@app/ondrejsika-theme/components/MainBar";

const Index = () => (
  <div>
    <Head>
      <title>Kontakty - Devopsa s.r.o.</title>
    </Head>
    <MainBar header="Kontakt na Devopsa s.r.o." />
    <div className="container">
      <h3 className="pt-4 pb-2">Devopsa s.r.o.</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <p>
            <a href="mailto:ondrej@devopsa.io">ondrej@devopsa.io</a>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <h4>Fakturační údaje</h4>
          <p>
            Odlehlá 471/24
            <br />
            190 00 Praha 9
            <br />
            Česká Republika
          </p>
          <table className="contact-table table-borderless">
            <tbody>
              <tr>
                <td>IČ:</td>
                <td>22416021</td>
              </tr>
              <tr>
                <td>DIČ:</td>
                <td>CZ22416021 (neplatce DPH)</td>
              </tr>
              <tr>
                <td>Účet:&nbsp;&nbsp;&nbsp;</td>
                <td>xxx/2010 (Fio)</td>
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
                <td>xxx / 2010</td>
              </tr>
              <tr>
                <td>SK (EUR):</td>
                <td>xxx / 8330</td>
              </tr>
              <tr>
                <td>IBAN:</td>
                <td>xxx</td>
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
      <p>
        Kontakt na{" "}
        <Link href="/kontakt">
          <a>Ondřej Šika</a>
        </Link>
        ,{" "}
        <Link href="/kontakt-sikalabs">
          <a>SikaLabs s.r.o.</a>
        </Link>
        ,{" "}
        <Link href="/kontakt-trainera">
          <a>Trainera s.r.o.</a>
        </Link>
      </p>
    </div>
  </div>
);

export default Index;
