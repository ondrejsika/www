import "@app/sika-kraml.de/css";
import ReactMarkdown from "react-markdown";
import TextArea from "@app/ondrej-sika.cz/components/TextArea";
import TwoCol from "@app/ondrej-sika.cz/components/TwoCol";
import References from "@app/ondrej-sika.cz/components/References";
import Price from "@app/ondrej-sika.cz/components/Price";
import Form from "@app/ondrej-sika.cz/components/Form";
import Head from "next/head";
import Header from "@app/ondrej-sika.cz/components/Header";
import docker from "@app/data/pictures/courses/docker.svg";
import { stripIndent } from "common-tags";

let site = {
  lang: "de"
};

const Index = () => (
  <div>
    <Head>
      <title>
        Docker Schulungen - Sika Kraml - IT Schulungen, Workshops und Beratung
      </title>
    </Head>
    <Header
      websiteHeader="Docker Schulung"
      inquiryBtn="Ask for training"
      logo={docker}
    ></Header>
    <div className="container course-page">
      <ReactMarkdown
        source={stripIndent`
        ### Die Technologie
        Docker ist eine Technologie, die die Entwicklungs- und Testprozesse stark vereinfacht. Betreiben Sie was Sie wollen und wo Sie es wollen. Warten Sie nicht mehr, bis Ihr Server konfiguriert oder ein Update durchgeführt ist. Verwalten Sie Ihre Luafzeitumgebung als Teil Ihres Projekts.

        ### Course Description
        During the two-day workshop, you’ll be shown everything you need to know to be able to use Docker - from creating a custom container image to the Swarm utilisation. This course is very hands-on, and you will be able to practice everything you learn.

        ### Schulungsleiter
        #### Ondrej Sika (englisch)

        My name is Ondřej Šika, I develop software at Slush Pool and hold workshops. I mostly teach Docker and Gitlab CI, which is closely related to Docker.
        I have over four years of commercial experience with Docker. I use it daily, both for development and production. I can't image working without it.

        #### Jiri Kraml (deutsch)

        Ich heiße Jiří Kraml und bin der Entwicklungsleiter bei Zigpos. Ob fürs Testing  oder Deployment - Docker ist stets eins der ersten Tools, die ich installiere. Die Reproduzierbarkeit von Prozessen hat uns schon so manchen Wochenendeinsatz erspart, denn mit Docker gehören Ausreden à la  "runs on my machine" der Vergangenheit an.

        ### Inhalt
        - Theoretische Einführung in Dockeru
        - Installation von Dockeru (für die, die es nicht schon zu Hause installiert haben)
        - Umgang mit containern
        - Umgang mit Images
        - Docker Compose - Mehrcontaineranwendungen in Docker
        - Deployment in Swarm
        - Demo eines Kubernetesdeployments

        ### Für wen die Schulung geeignet ist
        Die Schulung ist vorranging für Teilnehmer gedacht, die mit Docker keine oder nur geringe Erfahrungen gemacht haben. Vorkenntnisse von Docker sind nicht nötig. Die Schulung ist für Entwickler, DevOps und Administratoren geeignet, die Docker in der Praxis nutzen wollen oder mehr über die Möglichkeiten und Einsatzgebiete von Docker erfahren möchten.
        `}
      />
      <TwoCol
        col1={
          <ReactMarkdown
            source={stripIndent`
            #### Vorkenntnisse
            - Linuxgrundlagen
            - Grundlagen des Umgangs mit der Kommandozeile
            `}
            escapeHtml={false}
          />
        }
        col2={
          <ReactMarkdown
            source={stripIndent`
            #### Technische Voraussetzungen
            - Installiertes [Docker](/docker/instalation)
            - Internetzugang - idealerweise ohne Proxy
            `}
            escapeHtml={false}
          />
        }
      />
    </div>
    <References ids={["sit", "vse"]} lang={site.lang} />
    <Price PriceHeader="Preis" PriceBtn="Anfragen">
      Preis für die zweitägige Dockerschulung
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
        TextHeader="Schulung anfragen"
        TextParagraph="Pflichtfelder sind mit * markiert."
      >
        <Form
          course="Docker"
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
