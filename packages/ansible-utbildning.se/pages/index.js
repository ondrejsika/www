import Markdown from "@app/common/components/Markdown";
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
import site from "@app/ansible-utbildning.se/config";
import Link from "next/link";

const Index = () => (
  <div>
    <Head>
      <title>Ansible Utbildning, Ondrej Sika - ansible-utbildning.se</title>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Ansible Utbildning Sverige 🇸🇪"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.com/se/?x_source=ansible-utbildning.se"
      logoUrl="/static/ansible.png"
    >
      <HeaderLink url="ondrej@sika.io">
        Fråga efter en träning
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.com/se/kontakta/?x_source=ansible-utbildning.se">
        Kontakta mig
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### Vad är Ansible?
Ansible är ett verktyg för mass-konfiguration och installations-hantering. Du deklarerar din önskade ställning av servern och tjänsterna, och Ansible kommer att verkställa det. Ni behöver inte oroa er vilken skick servern och applikationerna är just nu; Ansible omvandlar dem till den önskade ställningen. Hela konfigurationen är driven av Git, så ni kommer aldrig att missa vad som är distribuerat någonstans och ni kommer inte missa några viktiga åtgärder. Ansible kommer att hjälpa er med applikationsinstallationer samt snabbare och säkrare server-administration.
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Kursbeskrivning
Utbildningen drivs som under en två-dagars praktisk workshop där du kan testa vad du lär dig i praktiken. Vi installerar Ansible tillsammans och beskriver hur det fungerar och vad är de grundläggande begreppen. Vi går igenom hur du konfigurerar en server (tester på DigitalOcean) och distribuerar ett program från start till slut. Från och med installationen av systempaket, nedladdning av program från Git, skapande av mallar för konfigurationsskript och konfiguration av hemligheter (t.ex. lösenord). Efter denna kurs kommer du att kunna använda Ansible dagligen och förenkla installations- och konfigurationsrutiner.
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Kursplan

- Grundläggande insikter i automatisering
- Grundläggande insikter i Ansible
- Ansible installation (för dem som inte installerade hemma)
- Basic Ansible kontroller
- Playbooks
- Mallar
- Secrets
- Skriva egna moduler
- Ansible & CI / CD (Gitlab CI)
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Vem bör delta
This training is primarily aimed at admins and DevOps who want to start using Ansible. At the same time, developers who deploy their applications (even into test environments) and want to simplify this process, will also find it useful.
Denna utbildning riktar sig främst till administratörer och DevOps som vill börja använda Ansible. Kursen är också användbart för utvecklare som distribuerar sina applikationer (även i testmiljöer) och vill förenkla denna process.
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
- Har Ansible installerat, instruktioner: [här] (https://ondrej-sika.com/se/ansible/install/)
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
        `}
        />
      </TextFrameWithImage>

      <MyClients lang={site.lang} />
      <ThreeCol
        header="Reference"
        col1={<Recommendation id="bohemiaenergy" lang={site.lang} />}
        col2={<Recommendation id="sit" lang={site.lang} />}
        col3={<Recommendation id="vse" lang={site.lang} />}
      />
      <TextFrame>
        <Markdown
          source={`
### Prissättning

Pris för två dagars hands-on Ansibleträning

- Öppet för allmänheten (självfinansierad): 800 GBP exkl. MOMS
- Öppet för allmänheten (företagsfinansierad): 1000 GBP exkl. MOMS
- Utbildning på plats (på plats): 3000 GBP exkl. MOMS
`}
        />
      </TextFrame>

      <TextFrame>
        <Markdown
          source={`
### Kontakt

#### Ondrej Sika
<ondrej@sika.io>
<br>[ondrej-sika.se](https://ondrej-sika.se)
<br>[+420 773 452 376](tel:+420773452376)
`}
        />
      </TextFrame>

      <TextFrame>
        <Markdown
          source={`

### Jag vill ha Ansible-träning

Om du är intresserad i vår Ansible workshop eller om ni har några frågor, kontakta mig gärna.

`}
        />
        <p className="text-center">
          <Link href="https://ondrej-sika.com/se/utbildning/ansible/forfragan/?x_source=ansible-utbildning.se">
            <a className="btn btn-large btn-success">
              Frågor om Ansible utbildning
            </a>
          </Link>
        </p>
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Relaterade Kurser

[Gitlab CI](https://ondrej-sika.com/se/utbildning/gitlab-ci)
`}
        />
      </TextFrame>
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
