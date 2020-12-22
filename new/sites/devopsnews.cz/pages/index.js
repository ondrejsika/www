import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Page = () => (
  <>
    <title>DevOps Newsletter - Ondrej Sika</title>
    <Container className="pt-5 pb-5">
      <h1>DevOps News</h1>
      <p style={{ fontSize: "1.7em" }}>
        Novinky z DevOps do emailu kazde pondeli
      </p>
      <Row>
        <Col>
          <h2>Newsletter</h2>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            href="https://airtable.com/shr9nVhPbQvbzlqxA"
            className="mt-3 mb-4"
          >
            Chci dostávat novinky
          </Button>
        </Col>
        <Col>
          <h2>Dotazy</h2>
          <p>
            Zajímá Vás něco? Napište mi email na{" "}
            <a href="mailto:ondrej@sika.io?subject=[DevOpsNews.cz] Dotaz">
              ondrej@sika.io
            </a>
          </p>
        </Col>
        <Col>
          <h2>Autoři</h2>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ondrejsika"
            >
              @ondrejsika
            </a>
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/vojtechmares_"
            >
              @vojtechmares_
            </a>
          </p>
        </Col>
      </Row>
      <h2>Novinky</h2>
      <Table>
        <tr>
          <td>30. 5. 2020</td>
          <td>
            Longhorn (Kubernetes Storage) is GA v1.0.0{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/longhorn/longhorn/releases/tag/v1.0.0"
            >
              https://github.com/longhorn/longhorn/releases/tag/v1.0.0
            </a>
          </td>
        </tr>
      </Table>
      <p className="mt-5 text-center" style={{ fontSize: "0.9em" }}>
        2020{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://sika.io">
          Ondřej Šika
        </a>
        &apos;s Project
      </p>
    </Container>
  </>
);
export default Page;
