import React from "react";
import App from "next/app";
import site from "@app/ondrej-sika.cz/config";
import Link from "next/link";
import styled from "styled-components";

import Layout from "@app/ondrejsika-theme/layouts/Layout";

import ThemeNavbar from "@app/ondrejsika-theme/components/Navbar";
import ThemeFooter from "@app/ondrejsika-theme/components/Footer";

// Imported CSS
import "@app/ondrej-sika.cz/css";

const WrapperWhite = styled.div`
  padding: 0.5em 0;
  color: white;
`;

const H4 = styled.h4`
  color: white;
`;

const A = styled.a`
  color: white;
  &:hover {
    text-decoration: underline white;
  }
`;
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
    firstColumn={
      <WrapperWhite>
        <H4>Trainera.io</H4>
        <p>
          <A href="mailto:sales@trainera.io">sales@trainera.io</A>
          <br />
          <A href="tel:+420773452376">+420 773 452 376</A>
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
      </WrapperWhite>
    }
    secondColumn={
      <WrapperWhite>
        <H4>Nejoblíbenější kurzy</H4>
        <ul>
          {[
            ["Docker", "/skoleni/docker"],
            ["Kubernetes", "/skoleni/kubernetes"],
            ["Gitlab CI", "/skoleni/gitlab-ci"],
            ["Terraform", "/skoleni/terraform"],
            ["Prometheus", "/skoleni/prometheus"]
          ].map((el, i) => {
            return (
              <li key={i}>
                <Link href={el[1]}>
                  <A className="a-underline">{el[0]}</A>
                </Link>
              </li>
            );
          })}
        </ul>
      </WrapperWhite>
    }
    thirdColumn={
      <WrapperWhite>
        <H4>Zajímají Vás novinky?</H4>
        <p>Odebírejte můj newsletter a budete v obraze!</p>
        <div className="input-group">
          <a
            className="btn btn-outline-header"
            href="https://sika.link/newsletter"
          >
            Přihlásit se k odběru článků a novinek
          </a>
        </div>
      </WrapperWhite>
    }
    center={
      <>
        <Link href="/lektorska-spoluprace">
          <A href="#">Lektorská spolupráce</A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/obchodni-spoluprace">
          <A href="#">Obchodní Spolupráce</A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/invite">
          <A href="#">Připojte se</A>
        </Link>
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
