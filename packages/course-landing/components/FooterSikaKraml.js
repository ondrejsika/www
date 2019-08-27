import Link from "next/link";
import Footer from "./Footer";

const FooterOndrejSika = () => (
  <Footer>
    <p>
      2019{" "}
      <Link href="https://sika-kraml.de">
        <a className="text-white">
          <strong>Sika Kraml Schulungen GbR.</strong>
        </a>
      </Link>
      <br />
      <Link href="https://ondrej-sika.de">
        <a className="text-white">
          <strong>Ondrej Sika</strong>
        </a>
      </Link>{" "}
      &amp; Jiri Kraml
    </p>
  </Footer>
);

export default FooterOndrejSika;
