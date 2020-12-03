import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const Page = () => (
  <Container className="pt-5 pb-5">
    <Alert variant="warning">
      Zaciname, na webu i dalsich vecech pracujeme :)
    </Alert>
    <h1>Digital Ocean Czech Community</h1>
    <p style={{ fontSize: "1.7em" }}>
      Komunita lidi a firem co pouzivaji Digital Ocean
    </p>
    <h2>Meetupy</h2>
    <Table>
      <tr>
        <th>Datum</th>
        <th>Misto</th>
        <th>Tema</th>
        <th>Speakeri</th>
      </tr>
      <tr>
        <td>20. 1. 2021</td>
        <td>Online</td>
        <td>Z hostingu do cloudu</td>
        <td>Ondrej Sika, Vojtech Mares</td>
      </tr>
    </Table>
    <h2>Newsletter</h2>
    <Button href="https://airtable.com/shrClmZoQgo9q2xn0" className="mt-3 mb-4">
      Chci dostavat novinky
    </Button>
    <h2>Dotazy</h2>
    <p>
      Zajima Vas neco? Napiste mi email na{" "}
      <a href="mailto:ondrej@sika.io?subject=Digital Ocean Czech Community">
        ondrej@sika.io
      </a>
    </p>
    <p className="mt-5 text-center" style={{ fontSize: "0.9em" }}>
      2020 <a href="https://sika.io">Ondrej Sika</a>&apos;s Project
    </p>
  </Container>
);
export default Page;
