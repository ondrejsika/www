import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Kontakty - Ondrej Sika</title>
    </Head>
    <div className="bar-header">
      <div className="container">
        <div className="pt-4 pb-4">
          <h1 className="text-white pt-3 pb-2">Kontakt</h1>
        </div>
      </div>
    </div>
    <div className="container">
      <h3 className="pt-4 pb-2">Ondřej Šika</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <p className="">
            <a href="tel:+420773452376">+420 773 452 376</a> (
            <a href="https://t.me/ondrejsika">Telegram</a>)
            <br />
            <a href="mailto:ondrej@ondrejsika.com?subject=Poptavka skoleni">
              ondrej@ondrejsika.com
            </a>{" "}
            (<a href="/pgp">PGP</a>)
          </p>
          <p className="pb-4">
            <a href="https://linkedin.com/in/ondrejsika">
              linkedin.com/in/ondrejsika
            </a>
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
          <table class="contact-table table-borderless">
            <tbody>
              <tr>
                <td>IČ:</td>
                <td>88114163</td>
              </tr>
              <tr>
                <td>DIČ:</td>
                <td>CZ9302252102</td>
              </tr>
              <tr>
                <td>Účet:&nbsp;&nbsp;&nbsp;</td>
                <td>2301432033/2010 (Fio)</td>
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
                <td>2301432033 / 2010</td>
              </tr>
              <tr>
                <td>SK (EUR):</td>
                <td>2301432033 / 8330</td>
              </tr>
              <tr>
                <td>IBAN:</td>
                <td>CZ0620100000002301432033</td>
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
