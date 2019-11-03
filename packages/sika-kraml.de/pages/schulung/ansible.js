import "@app/sika-kraml.de/css";
import ReactMarkdown from "react-markdown";
import Header from "@app/ondrej-sika.cz/components/Header";
import TextArea from "@app/ondrej-sika.cz/components/TextArea";
import TwoCol from "@app/ondrej-sika.cz/components/TwoCol";
import References from "@app/ondrej-sika.cz/components/References";
import Price from "@app/ondrej-sika.cz/components/Price";
import Form from "@app/ondrej-sika.cz/components/Form";
import Head from "next/head";
import ansible from "@app/data/pictures/courses/ansible-w.svg";
import { stripIndent } from "common-tags";

let site = {
  lang: "de"
};

const Index = () => (
  <div>
    <Head>
      <title>
        Ansible Schulungen - Sika Kraml - IT Schulungen, Workshops und Beratung
      </title>
    </Head>
    <Header
      websiteHeader="Ansible Training"
      inquiryBtn="Anfragen"
      logo={ansible}
    ></Header>
    <div className="container course-page">
      <ReactMarkdown
        source={stripIndent`
      ### Was ist Ansible?
      Ansible ermöglicht eine deklarative Beschreibung von Serverkonfigurationen und Deploymentprozessen.
      Sie beschreiben den gewünschten Zielzustand und Ansible erledigt den Rest.
      Dadurch behalten Sie stets die Übersicht und vergessen keine kritischen Prozessschritte.
      Zudem lässt sich die textbasierte Konfiguration hervorragend mit Git versionieren.
      Ansible hilft Ihnen, Anwendung schneller zu deployen und Server sicherer zu administieren.

      ### Kursbeschreibung
      Der Kurs wird als zweitägiger Workshop abgehalten, damit Sie das Gelernte auch gleich praktisch ausprobieren können.
      Wir installieren Ansible und erläutern die grundlegenden Konzepte.
      Wir werden sehen, wie man einen Server konfiguriert (eine Test-VM bei DigitalOcean) und deployen eine Anwendung von Anfang bis Ende.
      Dies beinhaltet die Installation von Systempaketen, das Runterladen der Anwedung mit Git,
      das Erstellen von Konfiurationsdateien aus Templates und das einrichten von Credential (z.B. Passwörtern).
      Nach diesem Kurs werden Sie in der Lage sein, Ansible im täglichen Betrieb zu nutzen und Ihre Konfigurations- und Deploymentvorgänge zu vereinfachen.

      ### Stichpunkte
      - Einführung in die Automatisierung
      - Einführung in Ansible
      - Ansible Installation (für jene, die es nicht schon vorher installiert haben)
      - Grundlegende Bedienung von Ansible
      - Playbooks
      - Templates
      - Secrets
      - Eigene Module schreiben
      - Ansible & CI/CD (Gitlab CI)

      ### Für wen der Kurs bestimmt ist
      Der Kurs ist in erster Linie für Admins und DevOps gedacht, die in Ansible einsteigen wollen.
      Entwickler, die ihre eigenen Anwendungen deployen (auch in Testumgebungen) und diesen Vorgang vereinfachen wollen,
      werden diesen Kurs ebenfalls nützlich finden.
      `}
      />

      <TwoCol
        col1={
          <ReactMarkdown
            source={stripIndent`
            #### Notwendige Vorkenntnisse
            - Grundlagenwissen Linux
            - Vertrautheit mit der Kommandozeile
            `}
            escapeHtml={false}
          />
        }
        col2={
          /* TODO where are the ansible instructions? we need to translate them to German too */
          <ReactMarkdown
            source={stripIndent`
            #### Technische Vorraussetzungen
            - Ansibleinstallation, Anleitung [hier](/ansible/instructions)
            - Internetzugang (https, ssh) - vorzugsweise ohne Proxy
            `}
            escapeHtml={false}
          />
        }
      />
    </div>
    {/* TODO references is broken, try to fix it */}
    {/*<References ids={['oxy','oxyshop']} lang={site.lang} />*/}
    <Price PriceHeader="Preis" PriceBtn="Anfragen">
      Preis für den zweitägigen Ansible Hands-On-Workshop
      <br />
      <br />
      <ReactMarkdown
        source={stripIndent`
        - Öffentlicher Termin (Privatkunde): _ € zzgl. MwSt.
        - Öffentlicher Termin (Unternehmenskunde): _ € zzgl. MwSt.
        - On-Premise Schulung: _ € zzgl. MwSt.
        `}
        escapeHtml={false}
      />
    </Price>
    <div className="container">
      <TextArea
        TextHeader="Workshop anfragen"
        TextParagraph="Pflichtfelder sind mit * markiert."
      >
        <Form
          course="Ansible"
          FormName="Name *"
          FromNamePlaceholder="Max Mustermann"
          FormCompany="Firma"
          FormCompanyPlaceholder="Muster GmbH"
          FormEmail="E-Mail *"
          FormEmailPlaceholder="mm@muster.de"
          FormPhone="Telefon *"
          FormPhonePlaceholder="0176 0000000"
          FormSent="Absenden"
        />
      </TextArea>
    </div>
  </div>
);

export default Index;
