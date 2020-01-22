import Markdown from "@app/common/components/Markdown";
import Header from "@app/course-landing/components/Header";
import HeaderLink from "@app/course-landing/components/HeaderLink";
import TextFrame from "@app/course-landing/components/TextFrame";
import TextFrameWithImage from "@app/course-landing/components/TextFrameWithImage";
import MyClients from "@app/course-landing/components/MyClients";
import ThreeCol from "@app/course-landing/components/ThreeCol";
import TwoCol from "@app/course-landing/components/TwoCol";
import Navigation from "@app/course-landing/components/Navigation";
import Contact from "@app/course-landing/components/ContactSK";
import Recommendation from "@app/course-landing/components/Recommendation";
import FooterOndrejSika from "@app/course-landing/components/FooterOndrejSika";
import Head from "next/head";
import site from "@app/skolenie-gitlab.sk/config";

const Index = () => (
  <div>
    <Head>
      <title>Školenie Gitlab CI, Ondrej Sika - skolenie-gitlab.sk</title>
      <link
        href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Skolenie Gitlab CI 🇸🇰"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=skolenie-gitlab-ci.sk"
      logoUrl="/static/gitlab-ci.svg"
    >
      <HeaderLink url="mailto:ondrej@sika.io?subject=[skolenie-gitlab-ci.sk] Poptavka firemniho skoleni Gitlab CI">
        Nezáväzne popýtať školenie
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skolenie-gitlab-ci.sk">
        Kontaktovať
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### Popis technológie
Continuous Integration (skrátene CI nebo CI/CD) je nástroj, ktorý za Vás automatizuje rutinné úlohy ako je púšťanie testov, kontrola kvality kódu alebo nasadzovanie. Umožní Vám rýchlejšie začleňovať zmeny do masteru a rýchlejšie nasadzovať. Výhodou Gitlab CI je veľmi dobrá podpora Dockeru. Môžete veľmi jednoducho skladať Docker images alebo púšťať testy v kontajneroch.
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Ako školenie prebieha
Na školení si formou workshopu vysvetlíme prečo je dobré CI používať, ukážeme si možnosti Gitlab CI a vyskúšame si napísať CI skript pre ukážkový projekt. Výsledkom bude CI skript pre jednoduchý projekt obsahujúci joby od buildu aplikácie, cez testy až po deployment.
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
#### Čo Vás naučím
- Všeobecný úvod do CI
- Úvod do Gitlab CI
- Inštalácia Gitlab CI Runneru
- Práca s CI jobmi
- Tvorba CI pipelines
- Automatické nasadzovanie
- Docker a CI
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Pre koho je školenie určené
Školenie je primárne určené vývojárom, ktorí používajú Gitlab a chcú začať používať Gitlab CI. Zároveň práve Gitlab CI môže byť dôvodom prechodu na GitLab. Školenie je tiež vhodné pre DevOps (serverových administrátorov), ktorí si chcú ulahčiť prácu s automatizáciou nasadzovania.
        `}
        />
        <TwoCol
          col1={
            <Markdown
              source={`
#### Predchádzajúce znalosti
- Základy práce s Linuxom
- Základy práce v terminále
- Základná znalosť Gitu výhodou - [Školenie Git](https://ondrej-sika.cz/skoleni/git/)
            `}
            />
          }
          col2={
            <Markdown
              source={`
#### Technické požiadavky
- Prístup na internet - ideálne bez korporátnej proxy, prípadne s nastavenou proxy v prehliadači
            `}
            />
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Lektor: Ondřej Šika"
        imgUrl={require("@app/data/pictures/ondrejsika.jpg")}
      >
        <Markdown
          source={`
Volám sa Ondřej Šika, vyvíjam softvér pre Slush Pool a školím. Školím hlavne Docker a CI, ktorý s Dockerom veľmi úzko súvisí. Ďalšie školenia nájdete na mojom webe [ondrej-sika.cz](https://ondrej-sika.cz/).
Všetky kurzy vediem osobne. S Gitlab CI mám skúsenosti z mnohých projektov a firiem. Takmer všetky projekty na ktorých pracujem využívaju Gitlab CI. Gitlab CI mi veľmi uľahčuje a zrýchľuje prácu pretože sa nemusím starať o rutinné akcie ako nasadzovanie alebo build aplikácie a môžem sa venovať vývoju a činnostiam ktoré mi prinášajú zisk.
        `}
        />
      </TextFrameWithImage>

      <MyClients HeaderClients="Moji najvýznamejší klienti" />

      <ThreeCol
        header="Referencie"
        col1={<Recommendation id="bohemiaenergy" lang={site.lang} />}
        col2={<Recommendation id="vse" lang={site.lang} />}
        col3={<Recommendation id="sit" lang={site.lang} />}
      />
      <TextFrame>
        <Markdown
          source={`
### Mám záujem o školenie
Ak máte záujem o školenie, neváhajte ma kontaktovať - [Nezáväzne popýtať školenie](https://ondrej-sika.cz/skoleni/gitlab-ci/poptavka/)
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Cena
Ak máte záujem o školenie u vás vo firme, [nezáväzne ho popýtajte](https://ondrej-sika.cz/skoleni/git/poptavka/) alebo mi napíšte email na ondrej@sika.io
- Otvorený termín: 199 EUR bez DPH
- Firemné školenie (vo firme): 779 EUR bez DPH
`}
        />
      </TextFrame>
      <Contact />
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
