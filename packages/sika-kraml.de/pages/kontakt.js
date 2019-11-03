import Head from "next/head";
import Link from "next/link";

const Index = props => (
  <div>
    <Head>
      <title>Kontakt | Sika-Kraml.de</title>
    </Head>
    <div className="bar-header">
      <div className="container">
        <div className="pt-4 pb-4">
          <h1 className="text-white pt-3 pb-2">Kontakt</h1>
        </div>
      </div>
    </div>
    <div className="container pt-4 pb-2">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <h3>Sika Kraml Schulungen</h3>
          <p className="">
            <a href="mailto:schulungen@sika-kraml.de">
              <b>schulungen@sika-kraml.de</b>
            </a>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <h3>Ondrej Sika</h3>
          <p>
            <a href="mailto:ondrej@sika-kraml.de">ondrej@sika-kraml.de</a>
            <br />
            <a href="tel:+420773452376">+420 773 452 376</a>
          </p>
        </div>
        <div className="col-lg-4 col-md-9 col-sm-12 col-12">
          <h3>Jiri Kraml</h3>
          <p>
            <a href="mailto:ondrej@sika-kraml.de">ondrej@sika-kraml.de</a>
            <br/>
            <a href="tel:+49177358658">+49 (0) 177 358658</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
