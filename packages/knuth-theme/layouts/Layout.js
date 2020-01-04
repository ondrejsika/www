import Link from "next/link";
import Head from "next/head";

// Imported CSS
import "bootstrap-css-only/css/bootstrap.min.css";

// Import Fonts
import Font from "@app/computer-modern-typewriter-light";

import Header from "../components/Header";

export default props => {
  let site_name = props.site_name;
  let menu_links = props.menu_links;
  let site_footer = props.site_footer;
  return (
    <div>
      <Font />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style jsx global>{`
        body {
          font-size: 1.2em;
          font-family: "Computer Modern Typewriter Light";
        }
      `}</style>
      <div className="container">
        <div className=" mt-5 mb-3">
          <Header menu_links={menu_links} site_name={site_name} />
        </div>
        {props.children}
        <p style={{ marginTop: "30px" }}>{site_footer}</p>
      </div>
    </div>
  );
};
