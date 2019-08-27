import FooterOndrejSika from "@app/course-landing/components/FooterOndrejSika";
import Header from "@app/course-landing/components/Header";
import HeaderLink from "@app/course-landing/components/HeaderLink";
import TextFrame from "@app/course-landing/components/TextFrame";
import TextFrameWithImage from "@app/course-landing/components/TextFrameWithImage";
import MyClients from "@app/course-landing/components/MyClients";
import ThreeCol from "@app/course-landing/components/ThreeCol";
import Recommendation from "@app/course-landing/components/Recommendation";
import TwoCol from "@app/course-landing/components/TwoCol";
import Navigation from "@app/course-landing/components/Navigation";
import Contact from "@app/course-landing/components/Contact";
import Head from "next/head";
import Markdown from "@app/common/components/Markdown";
import site from "@app/kubernetes-utbildning.se/config";
import Link from "next/link";

const Index = () => (
  <div>
    <Head>
      <title>
        Kuberneres Utbildning, Ondrej Sika - kubernetes-utbildning.se
      </title>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Kuberneres Utbildning Sverige 🇸🇪"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.com/se/?x_source=kubernetes-utbildning.se"
      logoUrl="/static/kubernetes.png"
    >
      <HeaderLink url="https://ondrej-sika.com/se/utbildning/kubernetes/forfragan/?x_source=kubernetes-utbildning.se">
        Fråga efter en träning
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.com/se/contact/?x_source=kubernetes-utbildning.se">
        Kontaka mig
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### Vad är Kubernetes?
Kubernetes är en av de mest använda plattformarna för att driva Docker-containers och stöds av viktiga marknadsledare (Google, Amazon, Microsoft, etc.) via Cloud Native Computing Foundation. Kubernetes används av företag av alla storlekar, från startups till bolag.
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Kursbeskrivning
Kursen drivs i form av en två-dagars praktisk workshop där du kommer att kunna använda allt du lär dig. Du kommer att lära dig hur man kör Kubernetes lokalt (för utveckling) och på en molnplattform, Digital Ocean. Du kommer också att lära dig den grundläggande strukturen i Kubernetes, inklusive dess komponenter. Du lär dig att skapa en Kubernetes Manifest och installationsprogram i Docker. Du kommer också att lära dig hur man arbetar med behörigheter och hur man använder (och skapar) paket i Helm.
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Kursplan
- Teori-introduktion till Kubernetes
- Så här installeras lokalt (minikube och kubectl)
- Beskrivning av Kubernetes-komponenter
- Distribution till Kubernetes
- Arbeta med behörigheter i Kubernetes-kluster
- Teori introduktion till Helm paket
- Installation / Distribution med hjälp av Helm
- Skapa ett anpassat Helm-paket
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Vem bör delta
Kursen riktar sig främst till utvecklare och devOps som vill underhålla sina applikationer i Kubernetes.
`}
        />
        <TwoCol
          col1={
            <Markdown
              source={`
#### Skicklighetskrav
- Basic [Docker](https://ondrej-sika.com/se/utbildning/docker/) kunskap
- Grundläggande Linux-kunskap
- Grundläggande terminalkunskap
            `}
            />
          }
          col2={
            <Markdown
              source={`
#### Tekniska krav
- Har Kubernetes installerat, instruktioner: [här] (https://ondrej-sika.com/se/kubernetes/install/)
- Tillgång till internet (https, ssh) - bättre utan företags-proxy
`}
            />
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Lektor: Ondrej Sika"
        imgUrl="/static/ondrejsika.jpg"
      >
        <Markdown
          source={`
En liten bit av min bakgrund; jag är en mjukvaruingenjör hos Slush Pool samt DevOps-konsult, arkitekt och föreläsare. Jag använder Ansible som ett verktyg för serveradministration. Jag försöker använda Ansible för administrationen av allt jag kan - från databasanvändare till DNS-hantering på Cloudflare.
<br/><br/>
Om du har några frågor - hör gärna från dig!
`}
        />
      </TextFrameWithImage>

      <MyClients lang={site.lang} />
      <ThreeCol
        header="References"
        col1={<Recommendation id="dimensiondata" lang={site.lang} />}
        col2={<Recommendation id="webglobe-yegon" lang={site.lang} />}
        col3={<Recommendation id="sit" lang={site.lang} />}
      />

      <TextFrame>
        <Markdown
          source={`
### Prissättning
Pris för två dagars hands-on Kubernetes-utbildning
- Öppet för allmänheten (självfinansierad): 800 GBP exkl. MOMS
- Öppet för allmänheten (företagsfinansierad): 1000 GBP exkl. MOMS
- Utbildning på plats (på plats): 3000 GBP exkl. MOMS
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Jag vill ha Kubernetes-utbildning

Om du är intresserad i vår Kubernetes workshop eller om ni har några frågor, kontakta mig gärna.


`}
        />
        <p className="text-center">
          <Link href="https://ondrej-sika.com/se/utbildning/kubernetes/forfragnan/?x_source=git-utbildning.se">
            <a className="btn btn-large btn-success">
              Frågor om Kubernetes utbildning
            </a>
          </Link>
        </p>
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Relaterade Kurser

[Docker](https://ondrej-sika.com/se/utbildning/docker)
`}
        />
      </TextFrame>
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
