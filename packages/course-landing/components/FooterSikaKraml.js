import React from "react";
import Link from "next/link";
import Footer from "./Footer";

const FooterOndrejSika = () => (
  <Footer>
    <p>
      2019{" "}
      <Link href="https://sika-kraml.de" className="text-white">

        <strong>Sika Kraml Schulungen GbR.</strong>

      </Link>
      <br />
      <Link href="https://ondrej-sika.de" className="text-white">

        <strong>Ondrej Sika</strong>

      </Link>{" "}
      &amp; Jiri Kraml
    </p>
  </Footer>
);

export default FooterOndrejSika;
