import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import Markdown from "@app/common/components/Markdown";
import BlogPostFooter from "@app/ondrejsika-theme/components/BlogPostFooter";

import Head from "next/head";

const ArticleLayout = props => {
  let trainingButtonLink = null;
  let trainingButtonText = null;

  if (props.ad) {
    trainingButtonLink = "/skoleni/" + props.ad;
    trainingButtonText = {
      git: "Školení Gitu",
      docker: "Školení Dockeru",
      kubernetes: "Školení Kubernetes",
      terraform: "Školení Terraformu",
      react: "Školení Reactu",
      "gitlab-ci": "Školení Gitlab CI",
      rancher: "Školení Rancheru",
      prometheus: "Školení Promethea"
    }[props.ad];
  }

  return (
    <div>
      <Head>
        <title>
          {props.title} - {(props.site && props.site.name) || "Ondřej Šika"}
        </title>
      </Head>
      <MainBar
        site={props.site}
        header={props.header || props.title}
        text={props.subheader}
      />

      <div className="container pt-4 pb-2 article-body">
        <div className="article">
          {props.children}
          {props.markdown && <Markdown source={props.markdown} />}
          {props.after && props.after}
        </div>
        {!props.hideFooter && (
          <BlogPostFooter
            trainingButtonText={trainingButtonText}
            trainingButtonLink={trainingButtonLink}
          />
        )}
      </div>
    </div>
  );
};

export default ArticleLayout;
