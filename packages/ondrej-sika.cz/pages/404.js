import React from "react";
import Head from "next/head";
import Markdown from "@app/common/components/Markdown";
import LectureImgMdLg from "@app/ondrej-sika.cz/components/LectureImgMdLg";
import LectureImgSm from "@app/ondrej-sika.cz/components/LectureImgSm";

export default () => {
  return (
    <>
      <Head>
        <title>404 Stránka nenalezena - Ondrej Sika | ondrej-sika.cz</title>
      </Head>
      <div className="bar-grey p-5">
        <h1 className="text-center text-white">404 Stránka nenalezena</h1>
      </div>
      <div className="container pt-5">
        <Markdown
          source={`
## Nenašli jste co hledáte ...

Napište mi email na <ondrej@ondrejsika.com> a dejte mi vědět co potřebujete. Rád Vám pomohu.
`}
        />
        <LectureImgMdLg LectureImgHeader="... nebo se podivejte na kurzy co školím" />
        <LectureImgSm LectureImgHeader="... nebo se podivejte na kurzy co školím" />
        <div className="mt-5" />
        <Markdown
          source={`
Pokud něco nefunguje, dejte mi vědět na <ondrej@ondrejsika.com>
`}
        />
      </div>
    </>
  );
};
