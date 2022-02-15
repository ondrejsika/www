import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import SentPageAd from "@app/ondrejsika-theme/components/SentPageAd";
import Markdown from "@app/common/components/Markdown";
import Head from "next/head";
import CourseBar from "@app/ondrejsika-theme/components/CourseBar";

const Sent = (props) => (
  <div>
    <Head>
      <title>Odesláno - Ondřej Šika</title>
    </Head>
    <MainBar
      header={
        <span style={{ backgroundColor: "red" }}>
          Při odesílání formuláře nastala chyba!
        </span>
      }
    />
    <div className="container pt-4">
      <Markdown
        source={`
Napište mi prosím email na <ondrej@sika.io>. Děkuji.
`}
      />
      <div style={{ height: "50px" }}></div>
      <SentPageAd />
      <div style={{ height: "50px" }}></div>
    </div>
    <CourseBar
      hiddenTop
      hiddenBottom
      site={props.site}
      hidden={true}
      LectureImgHeader="Vyberte si další školení"
    />
  </div>
);

export default Sent;
