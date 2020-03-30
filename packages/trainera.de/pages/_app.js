import React from "react";
import App from "next/app";
import site from "@app/trainera.io/config";
import Link from "next/link";

import Layout from "@app/ondrejsika-theme/layouts/Layout";

import ThemeNavbar from "@app/ondrejsika-theme/components/Navbar";
import ThemeFooter from "@app/ondrejsika-theme/components/Footer";
import ThemeLanguageSwitch from "@app/ondrejsika-theme/components/LanguageSwitch";
import Button from "@app/ondrejsika-theme/components/Button";

// Imported CSS
import "@app/ondrej-sika.cz/css";

const LanguageSwitch = <ThemeLanguageSwitch site={site} />;

const Navbar = (
  <ThemeNavbar
    site={site}
    NavName="Trainera.de 🇩🇪"
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
    site={site}
    firstColumn={
      <ThemeFooter.Wrapper>
        <ThemeFooter.H4>Trainera.io</ThemeFooter.H4>
        <p>
          <ThemeFooter.A href="mailto:sales@trainera.io">
            sales@trainera.io
          </ThemeFooter.A>
          <br />
          <ThemeFooter.A href="tel:+420773452376">
            +420 773 452 376
          </ThemeFooter.A>
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
                  <ThemeFooter.A href={el[1]} className="a-underline">
                    {el[0]}
                  </ThemeFooter.A>
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
            type="outline"
            href="https://sika.link/newsletter"
          >
            Přihlásit se k odběru článků a novinek
          </Button>
        </div>
      </ThemeFooter.Wrapper>
    }
    center={
      <>
        <Link href="/lektorska-spoluprace">
          <ThemeFooter.A href="#">Lektorská spolupráce</ThemeFooter.A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/obchodni-spoluprace">
          <ThemeFooter.A href="#">Obchodní Spolupráce</ThemeFooter.A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/invite">
          <ThemeFooter.A href="#">Připojte se</ThemeFooter.A>
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
      <Layout
        LanguageSwitch={LanguageSwitch}
        Navbar={Navbar}
        Footer={Footer}
        {...pageProps}
      >
        <Component lang={site.lang} {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
