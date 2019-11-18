import Markdown from "@app/common/components/Markdown";
import Head from "next/head";

export default props => (
  <div>
    <Head>
      <title>{props.title} - sika-kraml.de</title>
    </Head>
    <div className="bar-header">
      <div className="container">
        <div className="pt-4 pb-4">
          <h1 className="text-white pt-3 pb-2">{props.title}</h1>
        </div>
      </div>
    </div>
    <div className="container mt-3 mb-5">
      {props.children}
      {(() => {
        if (props.markdown) return <Markdown source={props.markdown} />;
      })()}
      {(() => {
        if (props.after) return props.after;
      })()}
    </div>
  </div>
);
