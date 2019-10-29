import React from "react";
import Head from "next/head";
import Markdown from "@app/common/components/Markdown";
import LectureImgMdLg from "@app/ondrej-sika.cz/components/LectureImgMdLg";
import LectureImgSm from "@app/ondrej-sika.cz/components/LectureImgSm";

export default props => {
  return (
    <>
      <Head>
        <title>404 Not Found - Ondrej Sika | ondrej-sika.cz</title>
      </Head>
      <div className="bar-grey p-5">
        <h1 className="text-center text-white">404 Not Found</h1>
      </div>
      <div className="container pt-5">
        <Markdown
          source={`
## Don't found you are looking for ...

Send me and email <ondrej@sika.io> and let me know what you need. I'd like to help you.
`}
        />
        <LectureImgMdLg
          lang={props.site.lang}
          LectureImgHeader="... or look for my training"
        />
        <LectureImgSm
          lang={props.site.lang}
          LectureImgHeader="... or look for my training"
        />
        <div className="mt-5" />
        <Markdown
          source={`
If something doesnt work, report to me on <ondrej@sika.io>
`}
        />
      </div>
    </>
  );
};
