import React from "react";
import App from "next/app";
import site from "@app/ondrej-sika.cz/config";
import styled from "styled-components";
import Link from "next/link";

import Layout from "@app/ondrejsika-theme/layouts/Layout";

import ThemeNavbar from "@app/ondrejsika-theme/components/Navbar";
import ThemeFooter from "@app/ondrejsika-theme/components/Footer";

// Imported CSS
import "@app/ondrej-sika.cz/css";

const Wrapper = styled.div`
  padding: 0.5em 0;
  color: #c8bfb0;
`;
const A = styled.a`
  color: #c8bfb0;
  &:hover {
    color: white;
    text-decoration: underline white;
  }
`;
const H4 = styled.h4`
  color: white;
`;

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
    firstColumn={
      <Wrapper>
        <H4>Ondrej Sika</H4>
        <p>
          <A href="mailto:ondrej@sika.io">ondrej@sika.io</A>
          <br />
          <A href="tel:+420773452376">+420 773 452 376</A>
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
      </Wrapper>
    }
    secondColumn={
      <Wrapper>
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
                  <A>{el[0]}</A>
                </Link>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    }
    thirdColumn={
      <Wrapper>
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
      </Wrapper>
    }
    center={
      <>
        <Link href="/obchodni-spoluprace">
          <A href="#">Obchodní Spolupráce</A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/doporuceni">
          <A href="#">Doporučení</A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/doporucte-me-prosim">
          <A href="#">Doporučte mě prosím</A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/book-me">
          <A href="#">Book Me</A>
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
