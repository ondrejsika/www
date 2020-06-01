import React from "react";
import Head from "next/head";
import MainBar from "@app/ondrejsika-theme/components/MainBar";

const Index = props => (
  <div>
    <Head>
      <title>Contact - Trainera s.r.o.</title>
    </Head>
    <MainBar site={props.site} header="Contact" />
    <div className="container">
      <h3 className="pt-4 pb-2">Trainera s.r.o.</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <p className="">
            <a href="mailto:sales@trainera.io?subject=Training Inquiry">
              sales@trainera.io
            </a>{" "}
            (training inquiry)
            <br />
            <a href="mailto:info@trainera.io">info@trainera.io</a> (other)
          </p>
          <p className="pb-4">
            <a href="https://www.linkedin.com/company/traineraio">
              linkedin.com/company/traineraio
            </a>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <h4>Billing Informations</h4>
          <p>
            Bělehradská 858/23
            <br />
            120 00 Prague 2
            <br />
            Czech Republic
          </p>
          <table className="contact-table table-borderless">
            <tbody>
              <tr>
                <td>Company ID:&nbsp;&nbsp;&nbsp;</td>
                <td>08591491</td>
              </tr>
              <tr>
                <td>VAT ID:</td>
                <td>CZ08591491</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-4 col-md-9 col-sm-12 col-12">
          <h4 className="pt-4 pt-md-0">Bank Account</h4>
          <table className="contact-table table-borderless mb-5">
            <tbody>
              <tr>
                <td>IBAN:</td>
                <td>CZ4920100000002801705982</td>
              </tr>
              <tr>
                <td>BIC/SWIFT:</td>
                <td>FIOBCZPPXXX</td>
              </tr>
              <tr>
                <td className="pt-3" valign="top">
                  Bank&nbsp;address:&nbsp;&nbsp;&nbsp;
                </td>
                <td className="pt-3">
                  Fio banka, a.s.,
                  <br />
                  V Celnici 1028/10,
                  <br />
                  Prague 1,
                  <br />
                  Czech Republic
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
