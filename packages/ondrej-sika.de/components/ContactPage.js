export default props => (
  <div>
    <div className="container">
      <h2 className="mt-5" id="contact">
        Contact me
      </h2>
      <h3 className="pt-4 pb-2">Ondrej Sika</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <p className="">
            <a href="tel:+49 XXX XXX XXX">+49 XXX XXX XXX</a> (
            <a href="https://t.me/ondrejsika">Telegram</a>)
            <br />
            <a href="mailto:ondrej@sika.io?subject=Training Inquiry">
              ondrej@sika.io
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
          <h4>Billing Information</h4>
          <p>
            Sika Labs, Ltd.
            <br />
            32 London Bridge St.
            <br />
            London SE1 9SG
            <br />
            UK
          </p>
          <table className="contact-table table-borderless">
            <tbody>
              <tr>
                <td>Company ID:</td>
                <td>88114163</td>
              </tr>
              <tr>
                <td>Vat ID:</td>
                <td>CZ9302252102</td>
              </tr>
              <tr>
                <td>Bank Account:&nbsp;&nbsp;&nbsp;</td>
                <td>2301432033/2010 (Fio)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-4 col-md-9 col-sm-12 col-12">
          <h4 className="pt-4 pt-md-0">Payment Information</h4>
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
    </div>
  </div>
);
