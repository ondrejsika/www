import React from "react";
import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>SikaLabs</title>
    </Head>
    <h1>SikaLabs</h1>
    <h2>
      Training; Consulting;
      <br />
      DevOps; Development;
    </h2>
    <h3>Contact</h3>
    <a href="mailto:hi@sikalabs.com" className="button">
      hi@sikalabs.com
    </a>
    <div style={{ height: "2em" }}></div>
    <h3>SikaLabs s.r.o.</h3>
    <p>
      Varšavská 715/36
      <br />
      120 00 Praha 2
      <br />
      Česká Republika
    </p>
    <table className="contact-table table-borderless">
      <tbody>
        <tr>
          <td>IČ:</td>
          <td>19168993</td>
        </tr>
        <tr>
          <td>DIČ:</td>
          <td>CZ19168993 (platce DPH)</td>
        </tr>
        <tr>
          <td>Účet:&nbsp;&nbsp;&nbsp;</td>
          <td>2202527221/2010 (Fio)</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Index;
