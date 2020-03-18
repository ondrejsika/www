import React from "react";
import App from "next/app";
import site from "@app/ondrej-sika.cz/config";

import Layout from "@app/ondrejsika-theme/layouts/Layout";

import ThemeNavbar from "@app/ondrejsika-theme/components/Navbar";
import ThemeFooter from "@app/ondrejsika-theme/components/Footer";

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

const Footer = (
  <ThemeFooter
    contact={
      <>
        <h3 className="text-white">Ondrej Sika</h3>
        <p>
          <a href="mailto:ondrej@sika.io" className="a-underline">
            ondrej@sika.io
          </a>
          <br />
          <a href="tel:+420773452376" className="a-underline">
            +420 773 452 376
          </a>
        </p>
        <table className="contact-table table-borderless">
          <tbody>
            <tr>
              <td>IČ:</td>
              <td>88114163</td>
            </tr>
            <tr>
              <td>DIČ:</td>
              <td>CZ9302252102</td>
            </tr>
            <tr>
              <td>Účet:&nbsp;&nbsp;&nbsp;</td>
              <td>2301432033/2010</td>
            </tr>
          </tbody>
        </table>
      </>
    }
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
      <Layout Navbar={Navbar} Footer={Footer} {...pageProps}>
        <Component lang={site.lang} {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
