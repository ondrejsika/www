import React from "react";
import CourseBar from "@app/ondrejsika-theme/components/CourseBar";
import styled from "styled-components";
import Translate from "@app/common/components/Translate";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import { Container } from "react-bootstrap";
import Head from "next/head";

const FontSize = styled.div`
  p,
  a {
    font-size: 24px;
  }
`;
const Page404 = props => (
  <>
    <Head>
      <title>
        404 Not found - {(props.site && props.site.name) || "Ondřej Šika"}
      </title>
    </Head>
    <MainBar site={props.site} header="404 Not found" text={props.subheader} />

    <FontSize>
      <Container className="mt-5 mb-5">
        <Translate
          lang={props.site.lang}
          default="en"
          en={
            <p>
              Send me and email{" "}
              <a href="mailto:ondrej@sika.io">ondrej@sika.io</a> and let me know
              what you need. I&apos;d like to help you.
            </p>
          }
          cs={
            <p>
              Napište mi email na{" "}
              <a href="mailto:ondrej@sika.io">ondrej@sika.io</a> a dejte mi
              vědět co potřebujete. Rád Vám pomohu. Nebo se podivejte na kurzy
              co školím:
            </p>
          }
        />
      </Container>
    </FontSize>
    <CourseBar
      hiddenTop
      hiddenBottom
      site={props.site}
      hidden={true}
      LectureImgHeader="Vyberte si školení"
    />
    <Container className="mt-5 mb-5">
      <FontSize>
        <Translate
          lang={props.site.lang}
          default="en"
          en={
            <p>
              If something doesnt work, please report to me on{" "}
              <a href="mailto:ondrej@sika.io">ondrej@sika.io</a>
            </p>
          }
          cs={
            <p>
              Pokud něco nefunguje, dejte mi vědět na{" "}
              <a href="mailto:ondrej@sika.io">ondrej@sika.io</a>
            </p>
          }
        />
      </FontSize>
    </Container>
  </>
);

export default Page404;
