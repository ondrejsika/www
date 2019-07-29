import Markdown from "@app/common/components/Markdown";
import Header from '@app/course-landing/components/Header'
import HeaderLink from '@app/course-landing/components/HeaderLink'
import TextFrame from '@app/course-landing/components/TextFrame';
import TextFrameWithImage from '@app/course-landing/components/TextFrameWithImage';
import MyClients from '@app/course-landing/components/MyClients';
import ThreeCol from '@app/course-landing/components/ThreeCol';
import TwoCol from '@app/course-landing/components/TwoCol';
import Navigation from '@app/course-landing/components/Navigation';
import Recommendation from '@app/course-landing/components/Recommendation'
import Contact from '@app/course-landing/components/Contact'
import FooterOndrejSika from '@app/course-landing/components/FooterOndrejSika';
import Head from 'next/head'
import site from '@app/gitlab-utbildning.se/config'

const Index = () => (
  <div>
    <Head>
        <title>Gitlab CI Utbildning, Ondrej Sika - gitlab-utbildning.se</title>
    </Head>
    <Navigation location={site.location}/>
    <Header
      websiteHeader="Gitlab CI Utbildning"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.se/?x_source=gitlab-utbildning.se"
      logoUrl="/static/gitlab-ci.svg"
    >
      <HeaderLink url="https://ondrej-sika.se/utbildning/gitlab-ci/forfragan/?x_source=gitlab-utbildning.se">Fråga efter en träning</HeaderLink>
      <HeaderLink url="https://ondrej-sika.se/kontakta/?x_source=gitlab-utbildning.se">Kontaka mig</HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
      <Markdown source={`
### Vad är Cl?
Kontinuerlig integration (Continuous Integration på enelska; CI eller CI / CD) är ett verktyg som automatiserar rutinmässiga uppgifter som körtest, kodkvalitet, eller implementering. Det möjliggör snabbare ändringar i master och snabbare implementering. EN stor fördel med Gitlab CI är dess Docker-support; du kan enkelt kombinera Docker-bilder eller köra test i containers.
        `}/>
      </TextFrame>
      <TextFrame>
        <Markdown source={`

### Kursbeskrivning
Kursen drivs i form av en en-dags hands-on-workshop där du lär dig vikten av CI, de olika versionerna av Gitlab CI och övningar att skriva CI-script för ett testprojekt. Resultatet kommer att vara en skript för ett enkelt projekt som innehåller applikationsbyggnadsjobb, från test till implementering.

### Course Description
This course is run in the form of a one day hands-on workshop where you will learn the importance of CI, the different versions of Gitlab CI and practice writing CI script for a sample project. The outcome will be a script for a simple project containing application build jobs, from tests to deployment.
`}/>
      </TextFrame>
      <TextFrame>
      <Markdown source={`
### Course outline
- Generic introduction to CI
- Introduction to Gitlab CI
- Installation of Gitlab CI Runner
- Work with CI Jobs
- Creation of CI Pipelines
- Deployment Automatisation
- Docker and CI
        `}/>
      </TextFrame>
      <TextFrame>
        <Markdown source={`
### Vem bör delta
Kursen riktar sig främst till utvecklare som använder Gitlab och vill börja använda Gitlab CI. Samtidigt så kan Gitlab CI vara anledningen till att folk överför till Gitlab. Kursen är också användbar för DevOps som vill förenkla sina rutinuppgifter med implementeringsautomatisering.
        `}/>
        <TwoCol
          col1={
            <Markdown source={`
#### Skicklighetskrav
- Grundläggande Linux-kunskap
- Grundläggande terminalkunskap
- Git-kunskap behövs icke, men hjälper - [Git utbildning](https://ondrej-sika.se/training/git/)
- Docker-kunskap behövs icke, men hjälper - [Docker utbildning](https://ondrej-sika.se/training/docker/)
            `}/>
          }
          col2={
            <Markdown source={`
#### Tekniska krav
- Tillgång till internet - bättre utan företags-proxy
            `}/>
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Lektor: Ondrej Sika"
        imgUrl="/static/ondrejsika.jpg"
        >
        <Markdown source={`
En liten bit av min bakgrund; jag är en mjukvaruingenjör hos Slush Pool samt DevOps-konsult, arkitekt och föreläsare. Jag använder Ansible som ett verktyg för serveradministration. Jag försöker använda Ansible för administrationen av allt jag kan - från databasanvändare till DNS-hantering på Cloudflare.
<br/><br/>
Om du har några frågor - hör gärna från dig!
        `}/>
      </TextFrameWithImage>

      <MyClients HeaderClients="Moji nejvýznamější klienti"/>

      <ThreeCol header="References"
        col1={
          <Recommendation id="bohemiaenergy" lang={site.lang}/>
        }
        col2={
          <Recommendation id="vse" lang={site.lang}/>
        }
        col3={
          <Recommendation id="sit" lang={site.lang}/>
        }
      />
      <TextFrame>
        <Markdown source={`
### Prissättning

Pris för två dagars hands-on Git-utbildning

- Öppet för allmänheten (självfinansierad): 800 GBP exkl. MOMS
- Öppet för allmänheten (företagsfinansierad): 1000 GBP exkl. MOMS
- Utbildning på plats (på plats): 3000 GBP exkl. MOMS
`}/>
      </TextFrame>
      <TextFrame>
        <Markdown source={`
### Jag vill ha Gitlab CI-utbildning

Om du är intresserad i vår Gitlab CI workshop eller om ni har några frågor, kontakta mig gärna.

`}/>
        <p className="text-center">
          <a href="https://ondrej-sika.se/utbildning/gitlab-ci/forfragan/?x_source=git-utbildning.se" className="btn btn-large btn-success">Inquire Gitlab CI training</a>
        </p>
      </TextFrame>
      <TextFrame>
        <Markdown source={`
### Related Courses

[Git](https://ondrej-sika.se/utbildning/gitlab-ci)
<br>[Docker](https://ondrej-sika.se/utbildning/docker)
`}/>
      </TextFrame>
    </div>
    <FooterOndrejSika />
  </div>
)

export default Index
