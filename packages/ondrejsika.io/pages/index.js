import React from "react";
import Head from "next/head";
import Link from "next/link";
// import Markdown from "@app/common/components/Markdown";

const Index = () => (
  <div>
    <Head>
      <title>Blog - Ondrej Sika, ondrejsika.io</title>
    </Head>
    <h1>Blog</h1>
    <p>
      04. 01. 2019{" "}
      <Link href="/blog/proof-of-concept-for-zeit-terraform-provider">
        <a>Proof of Concept for ZEIT Terraform Provider</a>
      </Link>
      <br />
      01. 01. 2019{" "}
      <Link href="/blog/terraform-state-in-git">
        <a>Terraform State in Git</a>
      </Link>
    </p>
  </div>
);

export default Index;
