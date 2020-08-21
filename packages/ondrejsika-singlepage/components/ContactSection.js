import React from "react";
import styled from "styled-components";
import SectionHeader from "@app/ondrejsika-theme/components/lp/LP-sectionHeader";
const Center = styled.div`
  text-align: center;
`;

const ContactSection = () => (
  <div style={{ marginBottom: "60px" }}>
    <div className="container">
      <Center>
        <SectionHeader id="contact">Contacts</SectionHeader>
      </Center>
      <h3 className="pt-4 pb-2">Ondrej Sika</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <p className="">
            <a href="+420773452376">+420 773 452 376</a> (
            <a href="https://t.me/ondrejsika">Telegram</a>)
            <br />
            <a href="mailto:ondrej@sika.io?subject=Training Inquiry">
              ondrej@sika.io
            </a>{" "}
          </p>
          <p className="pb-4">
            <a href="https://linkedin.com/in/ondrejsika">
              linkedin.com/in/ondrejsika
            </a>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <h4>Billing Information</h4>
          <p>
            Ondrej Sika
            <br />
            Klatovska 71
            <br />
            301 00 Pilsen
            <br />
            Czech Republic (EU)
          </p>
          <table className="contact-table table-borderless">
            <tbody>
              <tr>
                <td>Company ID:&nbsp;&nbsp;&nbsp;</td>
                <td>88114163</td>
              </tr>
              <tr>
                <td>Vat ID:</td>
                <td>CZ9302252102</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-4 col-md-9 col-sm-12 col-12">
          <h4 className="pt-4 pt-md-0">Payment Information</h4>
          <table className="contact-table table-borderless">
            <tbody>
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
                  Bank&nbsp;Address:&nbsp;&nbsp;&nbsp;
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

export default ContactSection;
