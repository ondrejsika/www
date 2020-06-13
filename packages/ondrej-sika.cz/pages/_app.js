import React from "react";
import App from "next/app";
import site from "@app/ondrej-sika.cz/config";
import Link from "next/link";
import styled from "styled-components";
import Layout from "@app/ondrejsika-theme/layouts/Layout";

import ThemeNavbar from "@app/ondrejsika-theme/components/Navbar";
import ThemeFooter from "@app/ondrejsika-theme/components/Footer";
import Button from "@app/ondrejsika-theme/components/Button";

// Imported CSS
import "@app/ondrej-sika.cz/css";

const Hide = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
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
          ["WEEKNOTES", "/blog/tag/weeknotes"],
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
      <ThemeFooter.Wrapper>
        <ThemeFooter.H4>Ondrej Sika</ThemeFooter.H4>
        <p>
          <ThemeFooter.A href="mailto:ondrej@sika.io">
            ondrej@sika.io
          </ThemeFooter.A>
          <br />
          <ThemeFooter.A href="tel:+420773452376">
            +420 773 452 376
          </ThemeFooter.A>
        </p>
        <Hide>
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
        </Hide>
      </ThemeFooter.Wrapper>
    }
    secondColumn={
      <ThemeFooter.Wrapper>
        <ThemeFooter.H4>Nejoblíbenější kurzy</ThemeFooter.H4>
        <ul>
          {[
            ["Docker", "/skoleni/docker"],
            ["Kubernetes", "/skoleni/kubernetes"],
            ["Gitlab CI", "/skoleni/gitlab-ci"],
            ["Terraform", "/skoleni/terraform"],
            ["Prometheus", "/skoleni/prometheus"]
          ].map((el, i) => {
            return (
              <ThemeFooter.Li key={i}>
                <Link href={el[1]}>
                  <ThemeFooter.A href="#">{el[0]}</ThemeFooter.A>
                </Link>
              </ThemeFooter.Li>
            );
          })}
        </ul>
      </ThemeFooter.Wrapper>
    }
    thirdColumn={
      <ThemeFooter.Wrapper>
        <ThemeFooter.H4>Zajímají Vás novinky?</ThemeFooter.H4>
        <p>Odebírejte můj newsletter a budete v obraze!</p>
        <div className="input-group">
          <Button
            site={site}
            type="outline-secondary"
            href="https://sika.link/newsletter"
          >
            Přihlásit se k odběru článků a novinek
          </Button>
        </div>
      </ThemeFooter.Wrapper>
    }
    center={
      <Hide>
        <Link href="/news" passHref>
          <ThemeFooter.A>News</ThemeFooter.A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/obchodni-spoluprace">
          <ThemeFooter.A href="#">Obchodní Spolupráce</ThemeFooter.A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/doporuceni">
          <ThemeFooter.A href="#">Doporučení</ThemeFooter.A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/doporucte-me-prosim">
          <ThemeFooter.A href="#">Doporučte mě prosím</ThemeFooter.A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/book-me">
          <ThemeFooter.A href="#">Book Me</ThemeFooter.A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/invite">
          <ThemeFooter.A href="#">Připojte se</ThemeFooter.A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/devops-pipeline">
          <ThemeFooter.A href="#">DevOps pipeline</ThemeFooter.A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/seznam-skoleni">
          <ThemeFooter.A href="#">Seznam Všech Školení</ThemeFooter.A>
        </Link>
      </Hide>
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
