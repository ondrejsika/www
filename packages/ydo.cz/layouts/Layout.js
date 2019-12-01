import Layout from "@app/bootstrap-theme/layouts/Layout";
import logo from "../data/ydo_logo.png";
import Head from "next/head";

export default props => (
  <Layout>
    <Head>
      <link rel="shortcut icon" type="image/png" href={logo} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css?family=Signika"
        rel="stylesheet"
      />
      <meta
        name="google-site-verification"
        content="0ZWRQOs5XJ8wmhkJ5wDxH1k5yGFDQz5gIoZXeo_hY4U"
      />
    </Head>
    <div style={{ margin: "10px", fontFamily: "'Signika', sans-serif" }}>
      <div
        style={{
          display: "inline-block",
          marginRight: "20px",
          verticalAlign: "top"
        }}
      >
        <img src={logo} width="100" />
      </div>
      <div style={{ display: "inline-block", verticalAlign: "top" }}>
        <h1
          style={{
            margin: "26px 0 32px",
            fontSize: "38px",
            fontWeight: "normal"
          }}
        >
          YDO.cz
        </h1>
        {props.children}
        <p style={{ fontSize: "12px", color: "gray", marginTop: "40px" }}>
          <b>YDO.cz</b> is <a href="https://ondrejsika.io">Ondrej Sika</a>'s
          project.
        </p>
      </div>
    </div>
  </Layout>
);
