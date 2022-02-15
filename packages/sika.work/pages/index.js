import React from "react";

import Head from "next/head";
import img from "@app/data/pictures/lecturers/ondrejsika/ondrejsika4x_notebook_vertical.jpg";

const Index = () => (
  <>
    <Head>
      <title>Ondrej Sika - sika.work</title>
    </Head>
    <div className="mt-2">
      <h1>Ondrej Sika</h1>
      <p>
        <strong>Your CTO / Lead Software &amp; DevOps Engineer</strong>
      </p>
      <p>
        <strong>Hire Me!</strong> (New York, London, Berlin, Zurich, Dubai,
        Doha)
      </p>
      <p>
        <a href="mailto:ondrej@sika.work">ondrej@sika.work</a>
        <br />
        <a href="/resume.pdf">resume.pdf</a>
      </p>
      <img src={img.src} height="400" />
    </div>
  </>
);

export default Index;
