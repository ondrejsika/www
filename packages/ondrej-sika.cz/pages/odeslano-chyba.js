import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import Markdown from "@app/common/components/Markdown";
import Head from "next/head";

const Sent = () => (
  <div>
    <Head>
      <title>Odesláno - Ondřej Šika</title>
    </Head>
    <MainBar
      header={
        <span style={{ color: "red" }}>
          !! Při odesílání formuláře nastala chyba !!
        </span>
      }
    />
    <div className="container pt-4">
      <Markdown
        source={`
Napište mi prosím email na <ondrej@sika.io>. Děkuji.
`}
      />
      <div style={{ height: "100px" }}></div>
    </div>
  </div>
);

export default Sent;
