import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const Page = () => (
  <>
    <title>Devopsaci.cz</title>
    <Container className="pt-5 pb-5">
      <Alert variant="warning">
        Začínáme, na webu i dalších věcech pracujeme :)
      </Alert>
      <div className="text-center">
        <h1>Devopsaci.cz</h1>
        <p style={{ fontSize: "1.7em" }}>Česká komunita lidí z DevOps</p>
      </div>

      <div className="text-center">
        <Button
          variant="outline-primary"
          href="https://twitter.com/devopsaci"
          className="mt-3 mb-4"
        >
          Twitter @devopsaci
        </Button>
        &nbsp;
        <Button
          variant="outline-primary"
          href="https://airtable.com/shr1EV8xLC0bCW4df"
          className="mt-3 mb-4"
        >
          Facebook Devopsaci.cz
        </Button>
        &nbsp;
        <Button
          variant="outline-primary"
          href="https://airtable.com/shr1EV8xLC0bCW4df"
          className="mt-3 mb-4"
        >
          Facebook Group
        </Button>
        &nbsp;
        <Button
          variant="outline-primary"
          href="https://airtable.com/shr1EV8xLC0bCW4df"
          className="mt-3 mb-4"
        >
          LinkedIn Devopsaci.cz
        </Button>
        &nbsp;
        <Button
          variant="outline-primary"
          href="https://airtable.com/shr1EV8xLC0bCW4df"
          className="mt-3 mb-4"
        >
          LinkedIn Group
        </Button>
        &nbsp;
        <Button
          variant="outline-primary"
          href="https://airtable.com/shr1EV8xLC0bCW4df"
          className="mt-3 mb-4"
        >
          Slack
        </Button>
        &nbsp;
        <Button
          href="https://airtable.com/shr1EV8xLC0bCW4df"
          className="mt-3 mb-4"
        >
          Newsletter
        </Button>
      </div>
      <h2 className="text-center">Meetupy</h2>
      <Row className="mb-5">
        <Col lg={3}>
          <div className="text-center">
            <h3>Cloud Native Prague</h3>
            <p>
              We are a group of enthusiasts of cloud native solutions from
              Prague and we believe there is more of us out there! We want to
              meet you all. Let&apos;s build a strong, cloud-native community to
              share experiences, learn from one another and talk about our
              successes and fuck-ups.
            </p>
            <a href="https://www.meetup.com/Cloud-Native-Prague/">Meetup.com</a>
            <br />
            <a href="https://twitter.com/CloudNativePrg">@CloudNativePrg</a>
            <br />
          </div>
        </Col>

        <Col lg={3}>
          <div className="text-center">
            <h3>Prague Containers</h3>
            <p>
              This is a group to share knowledge about latest and greatest
              container technologies (docker, rkt, cri-o), tools and systems
              around it like orchestrators (kubernetes, swarm, mesos, nomad,
              ...), image builders, ci tooling...
            </p>
            <a href="https://prgcont.cz/">prgcont.cz</a>
            <br />
            <a href="https://www.meetup.com/Prague-Containers-Meetup/">
              Meetup.com
            </a>
            <br />
          </div>
        </Col>

        <Col lg={3}>
          <div className="text-center">
            <h3>DigitalOcean Czech Community</h3>
            <p>Komunita lidí a firem co používají DigitalOcean</p>
            <a href="https://digitalocean.cz/">digitalocean.cz</a>
          </div>
        </Col>

        <Col lg={3}>
          <div className="text-center">
            <h3>HashiCorp Czech Community</h3>
            <p>
              Komunita lidí a firem co používají Terraform, Vault, Consul,
              Packer, ...
            </p>
            <a href="https://hashicorp.cz/">hashicorp.cz</a>
          </div>
        </Col>
      </Row>
      <h2 className="text-center">Kdo stojí za Devopsaci.cz?</h2>
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
        <a href="mailto:ondrej@sika.io?subject=[Devopsaci.cz] Dotaz">
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
