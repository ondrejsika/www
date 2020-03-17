import React from "react";
import App from "next/app";
import site from "@app/ondrej-sika.cz/config";

import Layout from "@app/ondrejsika-theme/layouts/Layout";

import ThemeNavbar from "@app/ondrejsika-theme/components/Navbar";

// Imported CSS
import "@app/ondrej-sika.cz/css";

const Navbar = (
  <ThemeNavbar
    NavName="Ondřej Šika"
    NavUnderheader="Software {Engineer, Konzultant, Lektor}"
    links={[
      ["DOMŮ", "/"],
      [
        "KURZY",
        [
          ["GIT", "/skoleni/git"],
          ["GITLAB CI", "/skoleni/gitlab-ci"],
          ["DOCKER", "/skoleni/docker"],
          ["KUBERNETES", "/skoleni/kubernetes"],
          ["RANCHER", "/skoleni/rancher"],
          ["ANSIBLE", "/skoleni/ansible"],
          ["TERRAFORM", "/skoleni/terraform"],
          ["PROMETHEUS", "/skoleni/prometheus"],
          ["PROXMOX", "/skoleni/proxmox"],
          ["ELK / EFK", "/skoleni/elk"],
          ["REACT & NEXT.JS", "/skoleni/react"],
          ["VIDEOKURZY", "/videokurzy"]
        ]
      ],
      ["TERMÍNY", "/verejne-terminy"],
      [
        "NÁVODY & ČLÁNKY",
        [
          ["BLOG", "/blog"],
          ["NÁVODY (TECHNICKÉ)", "/navody"],
          ["ČLÁNKY (RŮZNÉ)", "/clanky"],
          ["REPOZITÁŘE", "/repozitare"],
          ["RESOURCES", "/resources"]
        ]
      ],
      ["KONTAKT", "/kontakt"]
    ]}
  />
);

class MyApp extends App {
  constructor(...args) {
    super(...args);
    this.site = site;
  }
  render() {
    const { Component, pageProps } = this.props;
    pageProps.site = this.site;
    return (
      <Layout Navbar={Navbar} {...pageProps}>
        <Component lang={site.lang} {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
