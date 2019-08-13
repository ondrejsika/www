import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

export default props => (
  <div>
    <Head>
      <title>{props.title} - Ondřej Šika</title>
    </Head>
    <MainBar MainBarHeader={props.title}></MainBar>

    <div className="container pt-4 pb-2 article-body">
      {props.children}
      {(() => {
        if (props.markdown) return <Markdown source={props.markdown} />;
      })()}
    </div>
  </div>
);
