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
    <title>DigitalOcean Czech Community</title>
    <Container className="pt-5 pb-5">
      <Alert variant="warning">
        Začínáme, na webu i dalších věcech pracujeme :)
      </Alert>
      <div className="text-center">
        <h1>DigitalOcean Czech Community</h1>
        <p style={{ fontSize: "1.7em" }}>
          Komunita lidí a firem co používají DigitalOcean
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
          <td>20. 1. 2021, 18:00</td>
          <td>Online</td>
          <td>
            <p>
              <strong>Start DigitalOcean Czech Community</strong> (Ondrej Sika)
              10min
              <br />
              Úvodní slovo ke startu StartDigitalOcean Czech Community a
              DigitalOceanu obecně.
            </p>
            <p>
              <strong>Z hostingu do cloudu</strong> (Ondřej Šika, Vojtěch Mareš)
              40min
              <br />
              Case study jak jsme migrovali firmu z (lepšího) hostingu do
              DigitalOceanu a jaké nám to přineslo výhody.
            </p>
          </td>
        </tr>
      </Table>
      <h3>Hledáme Speakery</h3>
      <p>
        Chtěl bys mít na meetupu přednášku nebo jen lightning talk? Budeme
        moc rádi. Dej nám vědět emailem na{" "}
        <a href="mailto:ondrej@sika.io?subject=[DigitalOcean Czech Community] Chci prednaset">
          ondrej@sika.io
        </a>
      </p>
      <h2>Newsletter</h2>
      <Button
        href="https://airtable.com/shrClmZoQgo9q2xn0"
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
            vývojářských týmů zaváděním efektivních procesů ve vývoji. Naučím
            Vás používat prověřené nástroje a technologie, které povedou k
            rychlejšímu vývoji a bezpečnějšímu provozu vašeho software.
          </p>
        </Col>
        <Col>
          <div className="text-center">
            <Image
              src="https://github.com/vojtechmares.png"
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
            cloudového prostředí například v Kubernetes nebo do serverless
            prostředí. A s jejím následným monitoringem pro zajištění co
            nejvyšší dostupnosti. Pomůžu vám s automatizací procesů pomocí
            Continuous Integration a nasazením aplikace přímo do produkce díky
            Continuous Delivery metodice.
          </p>
        </Col>
      </Row>
      <h2>Dotazy</h2>
      <p>
        Zajímá Vás něco? Napište mi email na{" "}
        <a href="mailto:ondrej@sika.io?subject=[DigitalOcean Czech Community] Dotaz">
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
