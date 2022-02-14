import React from "react";
import Link from "next/link";
import Footer from "./Footer";

const FooterOndrejSika = () => (
  <Footer>
    <p>
      2019{" "}
      <Link href="https://ondrej-sika.cz">
        <a className="text-white">
          <strong>Ondrej Sika</strong>
        </a>
      </Link>
    </p>
  </Footer>
);

export default FooterOndrejSika;
