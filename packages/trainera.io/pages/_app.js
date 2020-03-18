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
    NavName="Trainera.io"
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
      ["KONTAKT", "/kontakt"]
    ]}
  />
);

const Footer = (
  <ThemeFooter
    contact={
      <>
        <h3 className="text-white">Trainera.io</h3>
        <p>
          <a href="mailto:sales@trainera.io" className="a-underline">
            sales@trainera.io
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
              <td>08591491</td>
            </tr>
            <tr>
              <td>DIČ:</td>
              <td>CZ08591491</td>
            </tr>
            <tr>
              <td>Účet:&nbsp;&nbsp;&nbsp;</td>
              <td>2801705982/2010</td>
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
