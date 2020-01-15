import "../css";
import Head from "next/head";

const Index = () => (
  <>
    <Head>
      <title>sika.work</title>
    </Head>
    <div className="mt-4">
      <h1>Ondrej Sika</h1>
      <p>
        <strong>Software &amp; DevOps Engineer</strong>
      </p>
      <p>
        <a href="mailto:ondrej@sika.work">ondrej@sika.work</a>
        <br />
        <a href="/resume.pdf">resume.pdf</a>
      </p>
    </div>
  </>
);

export default Index;
