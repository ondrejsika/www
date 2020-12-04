import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const Page = () => (
  <>
    <title>Digital Ocean Czech Community</title>
    <Container className="pt-5 pb-5">
      <Alert variant="warning">
        Zaciname, na webu i dalsich vecech pracujeme :)
      </Alert>
      <div className="text-center">
        <h1>Digital Ocean Czech Community</h1>
        <p style={{ fontSize: "1.7em" }}>
          Komunita lidi a firem co pouzivaji Digital Ocean
        </p>
      </div>
      <h2>Meetupy</h2>
      <Table>
        <tr>
          <th>Kdy</th>
          <th>Kde</th>
          <th>Prednasky</th>
        </tr>
        <tr>
          <td>20. 1. 2021, 18:00</td>
          <td>Online</td>
          <td>
            <p>
              <strong>Start Digital Ocean Czech Community</strong> (Ondrej Sika)
              10min
              <br />
              Uvodni slovo ke startu Start Digital Ocean Czech Community a
              Digital Oceanu obecne.
            </p>
            <p>
              <strong>Z hostingu do cloudu</strong> (Ondrej Sika, Vojtech Mares)
              40min
              <br />
              Case study jak jsme migrovali firmu z (lepsiho) hostingu do
              Digital Oceanu a jake nam to prineslo vyhody.
            </p>
          </td>
        </tr>
      </Table>
      <h3>Hledame Speakery</h3>
      <p>
        Chtel by jsi mit na meetupu prednasku nebo jen lightning talk? Budemem
        moc radi. Dej nam vedet emailem na{" "}
        <a href="mailto:ondrej@sika.io?subject=[Digital Ocean Czech Community] Chci prednaset">
          ondrej@sika.io
        </a>
      </p>
      <h2>Newsletter</h2>
      <Button
        href="https://airtable.com/shrClmZoQgo9q2xn0"
        className="mt-3 mb-4"
      >
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
  </>
);
export default Page;
