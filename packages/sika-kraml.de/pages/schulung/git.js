import "@app/sika-kraml.de/css";
import ReactMarkdown from "react-markdown";
import Header from "@app/ondrej-sika.cz/components/Header";
import TextArea from "@app/ondrej-sika.cz/components/TextArea";
import TwoCol from "@app/ondrej-sika.cz/components/TwoCol";
import References from "@app/ondrej-sika.cz/components/References";
import Price from "@app/ondrej-sika.cz/components/Price";
import Form from "@app/ondrej-sika.cz/components/Form";
import Head from "next/head";
import git from "@app/data/pictures/courses/git.svg";
import { stripIndent } from "common-tags";

let site = {
  lang: "de"
};

const Index = () => (
  <div>
    <Head>
      <title>
        Git Schulungen - Sika Kraml - IT Schulungen, Workshops und Beratung
      </title>
    </Head>
    <Header
      websiteHeader="Git Training"
      inquiryBtn="Anfragen"
      logo={git}
    ></Header>
    <div className="container course-page">
      <ReactMarkdown
        source={stripIndent`
        ### Was ist Git?
        Git ist als modernes Versionierungswerkzeug mittlerweile der Standard unter Softwareentwicklern.
        Freelancer, Startups und große Konzerne nutzen es täglich.
        Git ermöglicht eine einfache simultane Zusammenarbeit an Projekten, ohne dass man sich in die Quere kommt oder einem der Zugriff auf den aktuellen Stand erschwert wird.
        Die Zusammenarbeit wird durch Gitlab, einer Plattform für Design, Entwicklung und Betrieb von Softwareprojekten, noch weiter verbessert.

        ### Kursbeschreibung
        Der Kurs wird als eintägiger Workshop abgehalten.
        Sie lernen die Vorteile von Git kennen, werden verstehen, wie es funktioniert und warum es keine angemessenen Altenativen gibt.
        Wir zeigen Ihnen alles von der Installation und Einrichtung an, über einfache individuelle Arbeit auf einem Branch bis zu kollektiver Entwicklung
        in mehreren Branches mit verschiedenen Merge Strategien (merge/rebase).
        Die Vor- und Nachteile beider Strategien werden erläutert, damit Sie entscheiden können, welche besser zu Ihren Anforderungen passt.
        Es werden auch Auswege aus unerwartete Situationen wie "Oh, ich habe alle gelöscht" gezeigt.

        ### Stichpunkte
        - Installation und Einrichtung
        - Neues Repository
        - Einfache Git Befehle
        - Arbeit auf einem Branch
        - Arbeit auf mehreren Branches - merge, rebase (Gits Stärke)
        - Arbeit mit remote Repositories
        - Workflow mit Gitlab
        - Wiederherstellung gelöschter Daten aus dem Repository
        - Tipps

        ### Für wen der Kurs bestimmt ist
        Der Kurs ist in erster Linie für Entwickler gedacht, die noch keine Versionierung verwenden oder Git noch nicht benutzen.
        Der Kurs ist auch für jene nützlich, die nicht täglich Code schreiben, etwa DevOps.
        `}
      />
      <TwoCol
        col1={
          <ReactMarkdown
            source={stripIndent`
            #### Notwendige Vorkenntnisse
            - Grundlegender Umwang mit der Kommandozeile
            `}
            escapeHtml={false}
          />
        }
        col2={
          <ReactMarkdown
            source={stripIndent`
            #### Technische Vorraussetzungen
            - Gitinstallation
            - Internetzugang (https) - vorzugsweise ohne Proxy
            `}
            escapeHtml={false}
          />
        }
      />
    </div>
    <References ids={["vistag", "oxy"]} lang={site.lang} />
    <Price PriceHeader="Preis" PriceBtn="Workshop anfragen">
      Preis für den eintägigen Git Hands-On-Workshop
      <br />
      <br />
      <ReactMarkdown
        source={stripIndent`
        - Öffentlicher Termin (Privatkunde): _____ € zzgl. MwSt.
        - Öffentlicher Termin (Unternehmenskunde): _____ € zzgl. MwSt.
        - On-Premise Schulung: _____ € zzgl. MwSt.
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
          course="Git"
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
