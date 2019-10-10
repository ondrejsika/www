import Head from "next/head";
import Link from "next/link";
import PipedriveContactForm from "@app/ondrej-sika.cz/components/PipedriveContactForm";

const Index = props => (
  <div>
    <Head>
      <title>Kontakty - Trainera s.r.o.</title>
    </Head>
    <div className="bar-header">
      <div className="container">
        <div className="pt-4 pb-4">
          <h1 className="text-white pt-3 pb-2">Kontakt</h1>
        </div>
      </div>
    </div>
    <div className="container">
      <h3 className="pt-4 pb-2">Trainera s.r.o.</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <p className="">
            <a href="mailto:deals@trainera.io?subject=Poptavka skoleni">
              deals@trainera.io
            </a>
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
          <table class="contact-table table-borderless">
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
                <td>???/2010 (Fio)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-4 col-md-9 col-sm-12 col-12">
          <h4 className="pt-4 pt-md-0">Platební údaje</h4>
          <table class="contact-table table-borderless">
            <tbody>
              <tr>
                <td>ČR (CZK):</td>
                <td>??? / 2010</td>
              </tr>
              <tr>
                <td>SK (EUR):</td>
                <td>??? / 8330</td>
              </tr>
              <tr>
                <td>IBAN:</td>
                <td>???</td>
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
      </p>
      <PipedriveContactForm lang={props.lang} />
    </div>
  </div>
);

export default Index;
