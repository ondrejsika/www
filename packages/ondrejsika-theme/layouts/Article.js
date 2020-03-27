import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import Markdown from "@app/common/components/Markdown";
import AdBar from "@app/ondrejsika-theme/components/AdBar";
import NewsletterBar from "@app/ondrejsika-theme/components/NewsletterBar";

import Head from "next/head";

const ArticleLayout = props => {
  return (
    <div>
      <Head>
        <title>{props.title} - Ondřej Šika</title>
      </Head>
      <MainBar
        site={props.site}
        header={props.header || props.title}
        text={props.subheader}
      />

      <div className="container pt-4 pb-2 article-body">
        {props.children}
        {(() => {
          if (props.markdown) return <Markdown source={props.markdown} />;
        })()}
        {(() => {
          if (props.after) return props.after;
        })()}

        {!props.ad && !props.hideNewsletter && (
          <NewsletterBar site={props.site} />
        )}
        {props.ad && (
          <div className="row">
            <div className="col-6">
              <AdBar ad={props.ad} />
            </div>
            <div className="col-6">
              <NewsletterBar site={props.site} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleLayout;
