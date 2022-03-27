import React from "react";
import Head from "next/head";
import Link from "next/link";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Index = () => (
  <div>
    <Head>
      <title>Kontakty - Ondřej Šika</title>
    </Head>
    <MainBar header="Kontakt" />
    <div className="container">
      <h3 className="pt-4 pb-2">Ondřej Šika</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <p className="">
            <a href="tel:+420773452376">+420 773 452 376</a> (
            <a href="https://t.me/ondrejsika">Telegram</a>)
            <br />
            <a href="mailto:ondrej@sika.io?subject=Poptavka skoleni">
              ondrej@sika.io
            </a>
            <br />
            <a href="mailto:skoleni@sika.io?subject=Poptavka skoleni">
              skoleni@sika.io
            </a>
          </p>
          <p className="pb-4">
            <a href="https://linkedin.com/in/ondrejsika">
              linkedin.com/in/ondrejsika
            </a>
          </p>
          <p className="pb-4">
            Datová schránka: <b>dcd68s8</b>{" "}
            <CopyToClipboard text="dcd68s8">
              <span style={{ cursor: "pointer" }}>📋</span>
            </CopyToClipboard>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <h4>Fakturační údaje</h4>
          <p>
            Klatovská třída 1532/71
            <br />
            301 00 Plzeň
            <br />
            Česká Republika
          </p>
          <table className="contact-table table-borderless">
            <tbody>
              <tr>
                <td>IČ:</td>
                <td>
                  88114163{" "}
                  <CopyToClipboard text="88114163">
                    <span style={{ cursor: "pointer" }}>📋</span>
                  </CopyToClipboard>
                </td>
              </tr>
              <tr>
                <td>DIČ:</td>
                <td>
                  CZ9302252102{" "}
                  <CopyToClipboard text="CZ9302252102">
                    <span style={{ cursor: "pointer" }}>📋</span>
                  </CopyToClipboard>
                </td>
              </tr>
              <tr>
                <td>Účet:&nbsp;&nbsp;&nbsp;</td>
                <td>
                  2301432033/2010 (Fio){" "}
                  <CopyToClipboard text="2301432033/2010">
                    <span style={{ cursor: "pointer" }}>📋</span>
                  </CopyToClipboard>
                </td>
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
                <td>2301432033 / 2010</td>
              </tr>
              <tr>
                <td>SK (EUR):</td>
                <td>2301432033 / 8330</td>
              </tr>
              <tr>
                <td>IBAN:</td>
                <td>CZ0820100000002301432033</td>
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
        <Link href="/kontakt-trainera">
          <a>Trainera s.r.o.</a>
        </Link>
      </p>
    </div>
  </div>
);

export default Index;
