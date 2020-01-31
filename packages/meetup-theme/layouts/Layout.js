import Head from "next/head";
import Layout from "@app/bootstrap-theme/layouts/Layout";

export default props => (
  <Layout>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
    <style jsx global>{`
      h1,
      h2,
      .monospace {
        font-family: "IBM Plex Mono", monospace;
      }
      body {
        font-family: "IBM Plex Sans", sans-serif;
        color: #131480;
        background-color: #e1e1e1;
      }
    `}</style>
    {props.children}
  </Layout>
);
