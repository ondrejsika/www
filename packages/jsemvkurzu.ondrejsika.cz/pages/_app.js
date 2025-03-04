import React from "react";
import App from "next/app";
import site from "@app/ondrej-sika.cz/config";
import Layout from "@app/ondrejsika-theme/layouts/Layout";
import { CopyToClipboard } from "react-copy-to-clipboard";

import ThemeNavbar from "@app/ondrejsika-theme/components/Navbar";
import ThemeFooter from "@app/ondrejsika-theme/components/Footer";
import Button from "@app/ondrejsika-theme/components/Button";

// Imported CSS
import "bootstrap-css-only/css/bootstrap.min.css";
import "@app/ondrej-sika.cz/css/index.sass";

const Navbar = <ThemeNavbar NavName="Ondřej Šika" links={[]} />;

const Footer = (
  <ThemeFooter
    firstColumn={
      <ThemeFooter.Wrapper>
        <ThemeFooter.H4>Ondrej Sika</ThemeFooter.H4>
        <p>
          <ThemeFooter.A href="mailto:ondrej@sika.io">
            ondrej@sika.io
          </ThemeFooter.A>{" "}
          <CopyToClipboard text="ondrej@sika.io">
            <span style={{ cursor: "pointer" }}>📋</span>
          </CopyToClipboard>
          <br />
          <ThemeFooter.A href="mailto:skoleni@sika.io">
            skoleni@sika.io
          </ThemeFooter.A>{" "}
          <CopyToClipboard text="skoleni@sika.io">
            <span style={{ cursor: "pointer" }}>📋</span>
          </CopyToClipboard>
          <br />
          <ThemeFooter.A href="tel:+420773452376">
            +420 773 452 376
          </ThemeFooter.A>{" "}
          <CopyToClipboard text="+420773452376">
            <span style={{ cursor: "pointer" }}>📋</span>
          </CopyToClipboard>
        </p>
        <p>
          <span style={{ fontSize: "0.7em" }}>Company ID</span>
          <br />
          88114163{" "}
          <CopyToClipboard text="88114163">
            <span style={{ cursor: "pointer" }}>📋</span>
          </CopyToClipboard>
        </p>
        <p>
          <span style={{ fontSize: "0.7em" }}>VAT ID</span>
          <br />
          CZ9302252102{" "}
          <CopyToClipboard text="CZ9302252102">
            <span style={{ cursor: "pointer" }}>📋</span>
          </CopyToClipboard>
        </p>
      </ThemeFooter.Wrapper>
    }
    secondColumn={
      <ThemeFooter.Wrapper>
        <ThemeFooter.H4>Nejoblíbenější kurzy</ThemeFooter.H4>
        <ul>
          {[
            ["Docker", "https://ondrej-sika.cz/skoleni/docker"],
            ["Kubernetes", "https://ondrej-sika.cz/skoleni/kubernetes"],
            ["ArgoCD", "https://ondrej-sika.cz/skoleni/argocds"],
            ["Gitlab CI", "https://ondrej-sika.cz/skoleni/gitlab-ci"],
            ["Terraform", "https://ondrej-sika.cz/skoleni/terraform"],
            ["Prometheus", "https://ondrej-sika.cz/skoleni/prometheus"],
            ["Proxmox", "https://ondrej-sika.cz/skoleni/proxmox"],
            ["Rancher", "https://ondrej-sika.cz/skoleni/rancher"]
          ].map((el, i) => {
            return (
              <ThemeFooter.Li key={i}>
                <ThemeFooter.A href={el[1]}>{el[0]}</ThemeFooter.A>
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
    center={[]}
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
      <>
        <Layout Navbar={Navbar} Footer={Footer} {...pageProps}>
          <Component lang={site.lang} {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
