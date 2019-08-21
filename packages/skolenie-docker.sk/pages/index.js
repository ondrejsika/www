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
import site from "@app/skolenie-docker.sk/config";

const Index = () => (
  <div>
    <Head>
      <title>Školenie Docker, Ondrej Sika - skolenie-docker.sk</title>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Školenie Dockeru 🇸🇰"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=skoleni-docker.cz"
      logoUrl="/static/docker-w.svg"
    >
      <HeaderLink url="https://ondrej-sika.cz/skoleni/docker/poptavka/?x_source=skoleni-docker.cz">
        Nezáväzne popýtať školenie
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skoleni-docker.cz">
        Kontaktovať
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### Čo je to Docker
Docker je technológia, ktorá dnes veľmi zjednodušuje proces vývoja, testovania a prevádzky softvéru. Prevádzkujte čokoľvek a kdekoľvek. Už nečakajte na nastavenie vášho serveru alebo na aktualizáciu nejakej knižnice. Majte prostredie ako súčasť vašej aplikácie.
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Ako školenie prebieha

Na školení Úvod do práce s Dockerom si ukážeme všetko dôležité, ako s Dockerom pracovať od vytvorenia vlastných kontajnerov až po jeho prevádzku v Swarme. Všetko si aj prakticky vyskúšame.
`}
        />
      </TextFrame>
      <TextFrame header="">
        <Markdown
          source={`
### Čo Vás naučím

- Teoretický úvod do Dockeru
- Inštaláciu Dockeru (tých, ktorí ho nenainštalovali doma)
- Prácu s kontajnermi
- Prácu s obrazmi
- Docker Compose - viackontajnerové aplikácie v Dockeri
- Deployment do Swarmu
- Ukážka deploymentu do Kubernetes
`}
        />
      </TextFrame>
      <TextFrame header="">
        <Markdown
          source={`
### Pre koho je školenie určené

Školenie je primárne určené ľuďom, ktorí nemajú s Dockerom žiadne (alebo len malé) skúsenosti. Účasť na školení nie je podmienená predchádzajúcimi znalosťami Dockeru. Je vhodné pre vývojárov alebo DevOps (serverových administrátorov), ktorí chcú Docker využívať v praxi alebo chcú získť prehľad o tom čo Docker rieši a kde by ho mohli použiť.
`}
        />
        <TwoCol
          col1={
            <Markdown
              source={`
#### Predchádzajúce znalosti

- Základy práce s Linuxom
- Základy práce v terminále
`}
            />
          }
          col2={
            <Markdown
              source={`
#### Technické požiadavky

- Nainštalovaný Docker, [návod na inštaláciu](https://www.ondrej-sika.cz/docker/instalace/)
- Prístup na internet - ideálne bez korporátnej proxy, prípadne nastavenú proxy v prehliadači
`}
            />
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Lektor: Ondřej Šika"
        imgUrl="/static/ondrejsika.jpg"
      >
        <Markdown
          source={`
Volám sa Ondřej Šika, vyvíjam softvér pre Slush Pool a školím. Školím prevažne Docker a CI, ktorý spolu s Dockerom veľmi úzko súvisí. Ďalšie školenia nájdete na mojom webe [ondrej-sika.cz](https://ondrej-sika.cz/).

Všetky kurzy vediem osobne. S Dockerom mám viac ako štyri roky skúseností v rámci komerčného vývoja softvéru. Docker používam denne vo vývoji, ale aj na produkcii a prácu bez neho si už neviem ani predstaviť.
`}
        />
      </TextFrameWithImage>

      <MyClients HeaderClients="Moji najvýznamejší klienti" />

      <ThreeCol
        header="Reference"
        col1={<Recommendation id="bohemiaenergy" lang={site.lang} />}
        col2={<Recommendation id="vse" lang={site.lang} />}
        col3={<Recommendation id="sit" lang={site.lang} />}
      />

      <TextFrame>
        <Markdown
          source={`
### Mám záujem o školenie
Ak máte záujem o školenie, neváhajte ma kontaktovať - [Nezáväzne popýtať školenie](https://ondrej-sika.cz/skoleni/docker/poptavka/)
`}
        />
      </TextFrame>

      <TextFrame>
        <Markdown
          source={`
### Cena
Ak máte záujem o školenie u vás vo firme, [nezáväzne ho popýtajte](https://ondrej-sika.cz/skoleni/docker/poptavka/) alebo mi napíšte email na ondrej@ondrejsika.com
- Otvorený termín (self funded): 389 EUR bez DPH
- Otvorený termín (company funded): 589 EUR bez DPH
- Firemní školení (vo firme): 1550 EUR bez DPH
        `}
        />
      </TextFrame>
      <Contact />
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
