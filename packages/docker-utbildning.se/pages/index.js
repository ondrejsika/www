import Header from "@app/course-landing/components/Header";
import HeaderLink from "@app/course-landing/components/HeaderLink";
import TextFrame from "@app/course-landing/components/TextFrame";
import TextFrameWithImage from "@app/course-landing/components/TextFrameWithImage";
import MyClients from "@app/course-landing/components/MyClients";
import ThreeCol from "@app/course-landing/components/ThreeCol";
import TwoCol from "@app/course-landing/components/TwoCol";
import Navigation from "@app/course-landing/components/Navigation";
import Recommendation from "@app/course-landing/components/Recommendation";
import Contact from "@app/course-landing/components/Contact";
import FooterOndrejSika from "@app/course-landing/components/FooterOndrejSika";
import Head from "next/head";
import Markdown from "@app/common/components/Markdown";
import site from "@app/docker-utbildning.se/config";
import Link from "next/link";

const Index = () => (
  <div>
    <Head>
      <title>Docker Utbildning, Ondrej Sika - docker-utbildning.se</title>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Docker Utbildning Sverige 🇸🇪"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.com/se/?x_source=docker-utbildning.se"
      logoUrl="/static/docker-w.svg"
    >
      <HeaderLink url="mailto:ondrej@sika.io?subject=[ondrej-sika.cz] Poptavka firemniho skoleni xxx">
        Fråga efter en träning
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.com/se/kontakta/?x_source=docker-utbildning.se">
        Kontakta mig
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### Vad är Docker?
Docker kan göra ditt liv enklare genom att förenkla processen för FoU, testning, och programvara i din verksamhet. Kör allt, överallt. Du beöver inte spendera tid på att vänta på serveruppsättningar eller slumpmässiga biblioteks-uppdateringar. Ha miljön som en del av din applikation.
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Kursbeskrivning
Under denna  två-dagars workshopen så kommer du att bli visad allt du behöver för att kunna använda Docker - från att skapa en anpassad containerbild till Swarm-utnyttjande. Kursen är väldigt praktisk, och du kommer att kunna använda allt du lär dig.
`}
        />
      </TextFrame>
      <TextFrame header="">
        <Markdown
          source={`
### Kursplan
- Teori-introduktion av containrar & Docker
- Hur man installerar Docker hemma eller på jobbet (för dem som inte gjorde det)
- Grunderen av containering
- Grunder i bilder
- Docker Compose - multi-container applikationer
- Driftsättning till Swarm
- Förhandsvisning av distribuering till Kubernetes
`}
        />
      </TextFrame>
      <TextFrame header="">
        <Markdown
          source={`

### Vem bör delta
Denna kurs är huvudsakligen inriktad på totala nybörjare som har ingen eller väldigt lite erfarenhet med Docker. Mest av allt, utvecklare och / eller devOps (serveradministratörer), eller de som vill använda Docker i praktiken eller vill veta mer om sitt syfte och om det är något de kan genomföra.
`}
        />
        <TwoCol
          col1={
            <Markdown
              source={`
#### Skicklighetskrav
- Grundläggande Linux kunskap
- Grundläggande terminalkunskap
`}
            />
          }
          col2={
            <Markdown
              source={`
#### Tekniska krav
- Har Docker installerat, instruktioner: [här] (https://ondrej-sika.com/se/docker/install/)
- Tillgång till internet (https, ssh) - bättre utan företags-proxy, eller proxy i Docker
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

      <MyClients HeaderClients="My clients" />

      <ThreeCol
        header="References"
        col1={<Recommendation id="bohemiaenergy" lang={site.lang} />}
        col2={<Recommendation id="vse" lang={site.lang} />}
        col3={<Recommendation id="sit" lang={site.lang} />}
      />
      <TextFrame>
        <Markdown
          source={`
### Prissättning
Pris för två dagars hands-on docker-utbildning
- Öppet för allmänheten (självfinansierad): 800 GBP exkl. MOMS
- Öppet för allmänheten (företagsfinansierad): 1000 GBP exkl. MOMS
- Utbildning på plats (på plats): 3000 GBP exkl. MOMS
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Jag vill ha Docker-utbildning

Om du är intresserad i vår Docker workshop eller om ni har några frågor, kontakta mig gärna.

`}
        />
        <p className="text-center">
          <Link href="https://ondrej-sika.com/se/utbildning/docker/forfragan/?x_source=docker-utbildning.se">
            <a className="btn btn-large btn-success">
              Frågor om Docker utbildning
            </a>
          </Link>
        </p>
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Relaterade Kurser

[Kubernetes](https://ondrej-sika.com/se/utbildning/kubernetes)
`}
        />
      </TextFrame>
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
