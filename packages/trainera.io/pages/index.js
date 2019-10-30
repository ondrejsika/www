import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Trainera.io</title>
    </Head>
    <div className="container mt-4">
      <h2>O nás</h2>
      <p>
        Nabízíme školení a konzultace v DevOps. Primárně Git, Gitlab CI, Docker,
        Kubernetes, Terraform, Ansible, ELK/EFK, ...
      </p>
      <h2>Kontakt</h2>
      <p>
        Poptávky služeb školení a konzultace posílejte na{" "}
        <a href="mailto:sales@trainera.io" style={{ fontWeight: "bold" }}>
          sales@trainera.io
        </a>
      </p>
      <p>
        Kontakt na vedení firmy je{" "}
        <a href="mailto:trainera@trainera.io">trainera@trainera.io</a>
      </p>
      <h3>Fakturační údaje</h3>
      <p>
        Bělehradská 858/23
        <br />
        120 00 Praha 2<br />
        Česká Republika
      </p>
      <p>
        IČ: 08591491
        <br />
        DIČ: CZ08591491 (neplaátce DPH)
      </p>
      <h3>Platební údaje</h3>
      <p>Bankovní účet: 2801705982 / 2010 (Fio)</p>
    </div>
  </div>
);

export default Index;
