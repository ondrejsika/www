import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const Page = () => (
  <>
    <title>HashiCorp Czech Community</title>
    <Container className="pt-5 pb-5">
      <Alert variant="warning">
        Začínáme, na webu i dalších věcech pracujeme :)
      </Alert>
      <div className="text-center">
        <h1>HashiCorp Czech Community</h1>
        <p style={{ fontSize: "1.7em" }}>
          Komunita lidí a firem co používají Terraform, Vault, Consul, Packer,
          ...
        </p>
      </div>
      <h2>Meetupy</h2>
      <Table>
        <tr>
          <th>Kdy</th>
          <th>Kde</th>
          <th>Přednášky</th>
        </tr>
        <tr>
          <td>4. 3. 2021, 18:00</td>
          <td>Online</td>
          <td>
            <p>
              <strong>Start HashiCorp Czech Community</strong> (Ondrej Sika)
              10min
              <br />
              Úvodní slovo ke startu meetupu HashiCorp Czech Community.
            </p>
            <p>
              <strong>Terraform a Vault</strong> (Ondřej Šika) 40min
              <br />
              Ukazka jak integrovat Terraform s Vaultem a co z toho plyne za
              vyhody.
            </p>
          </td>
        </tr>
      </Table>
      <h3>Hledáme Speakery</h3>
      <p>
        Chtěl bys mít na meetupu přednášku nebo jen lightning talk? Budeme moc
        rádi. Dej nám vědět emailem na{" "}
        <a href="mailto:ondrej@sika.io?subject=[HashiCorp Czech Community] Chci prednaset">
          ondrej@sika.io
        </a>
      </p>
      <h2>Newsletter</h2>
      <Button
        href="https://airtable.com/shr0LR5JxxeGSnNPT"
        className="mt-3 mb-4"
      >
        Chci dostávat novinky
      </Button>
      <h2>Organizátoři</h2>
      <Row>
        <Col>
          <div className="text-center">
            <Image
              src="https://github.com/ondrejsika.png"
              roundedCircle
              style={{ maxWidth: "200px" }}
            />
            <h3>Ondřej Šika</h3>
            <p>
              <a href="https://twitter.com/ondrejsika">@ondrejsika</a>
            </p>
          </div>
          <p>
            Jsem freelance DevOps konzultant a lektor. Zlepšuji práci
            vývojářských týmů zaváděním efektivních procesů ve vývoji.
          </p>
        </Col>
        <Col>
          <div className="text-center">
            <Image
              src="https://vojtechmares.com/images/me.jpg"
              roundedCircle
              style={{ maxWidth: "200px" }}
            />
            <h3>Vojtěch Mareš</h3>
            <p>
              <a href="https://twitter.com/vojtechmares_">@vojtechmares_</a>
            </p>
          </div>
          <p>
            Freelance software vývojář, DevOps konzultant a lektor. Pomůžu vám s
            řešením infrastruktury, vývojem aplikace až po její nasazení do
            cloudového prostředí například v Kubernetes.
          </p>
        </Col>
        <Col>
          <div className="text-center">
            <Image
              src="https://github.com/martinjurco.png"
              roundedCircle
              style={{ maxWidth: "200px" }}
            />
            <h3>Martin Jurčo</h3>
            <p>
              <a href="https://twitter.com/martinjurco">@martinjurco</a>
            </p>
          </div>
          <p>COO &amp; CMO @ SikaLabs.</p>
        </Col>
      </Row>
      <h2>Dotazy</h2>
      <p>
        Zajímá Vás něco? Napište mi email na{" "}
        <a href="mailto:ondrej@sika.io?subject=[HashiCorp Czech Community] Dotaz">
          ondrej@sika.io
        </a>
      </p>
      <h2>Sponzoři</h2>
      <Row>
        <Col lg={2}>
          <div className="text-center">
            <a href="https://sikalabs.com">
              <Image
                src="https://github.com/sikalabs.png"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </Col>
        <Col lg={2}>
          <div className="text-center">
            <a href="https://trainera.cz">
              <Image
                src="https://github.com/traineraio.png"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </Col>
        <Col lg={2}>
          <div className="text-center">
            <a href="https://skoleni.io">
              <Image
                src="https://github.com/skoleniio.png"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </Col>
      </Row>
      <p className="pt-2">
        Chcete podpořit meetupy? Napište na{" "}
        <a href="mailto:ondrej@sika.io?subject=[DigitalOcean Czech Community] Sponzoring">
          ondrej@sika.io
        </a>
      </p>
      <p className="mt-5 text-center" style={{ fontSize: "0.9em" }}>
        2020 <a href="https://sika.io">Ondřej Šika</a>&apos;s Project
      </p>
    </Container>
  </>
);
export default Page;
