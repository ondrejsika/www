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
import site from "@app/gitlab-ci.cz/config";

const Index = () => (
  <div>
    <Head>
      <title>Školení Gitlab CI, Ondrej Sika - gitlab-ci.cz</title>
      <link
        href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Školení Gitlab CI"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=skoleni-gitlab-ci.cz"
      logoUrl="/static/gitlab-ci.svg"
    >
      <HeaderLink url="mailto:ondrej@sika.io?subject=[ondrej-sika.cz] Poptavka firemniho skoleni Gitlab CI">
        Nezávazně poptat školení
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skoleni-gitlab-ci.cz">
        Kontaktovat
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### Popis technologie
Continuous Integration (zkráceně CI nebo CI/CD) je nástroj, který za Vás automatizuje rutinni úkoly jako je pouštění testů, kontrola kvality kódu a nebo nasazování. Umožní vám rychleji začleňovat změny do masteru a rychleji nasazovat. Výhodou Gitlab CI je velmi dobrá podpora Dockeru, můžete velmi jednoduše skládat Docker images a nebo pouštět testy v kontejnerech.
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Jak školení probíhá
Na školení formou workshopu si vysvětlíme proč je dobré CI používat, ukážeme si možnosti Gitlab CI a vyzkoušíme si napsat CI skript pro ukázkový projekt. Výsledkem bude CI skript pro jednoduchý projekt obsahující joby od buildu aplikace, přez testy až po deployment.
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
#### Co Vás naučím
- Obecný úvod do CI
- Úvod do Gitlab CI
- Instalace Gitlab CI Runneru
- Práce s CI joby
- Tvorba CI pipelines
- Automatické nasazování
- Docker a CI
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Pro koho je školení určeno
Školení je primárně určeno vývojářům kteří používají Gitlab a chtějí začít používat Gitlab CI. Zároveň právě Gitlab CI může být důvod přechodu na Gitlab. Školení je také vhodné pro DevOps, kteří si chtějí ulehčit práci s automatizací nasazování.
        `}
        />
        <TwoCol
          col1={
            <Markdown
              source={`
#### Předchozí znalosti
- Základy práce s Linuxem
- Základy práce v terminálu
- Základní znalost Gitu výhodou - [Školení Git](https://ondrej-sika.cz/skoleni/git/)
            `}
            />
          }
          col2={
            <Markdown
              source={`
#### Technické požadavky
- Přístup na internet - ideálně bez korporátní proxy, případně nastavenou proxy v prohlížeči
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
Jmenuji se Ondřej Sika, vyvíjím software pro Slush Pool a školím. Školím převážně Docker a CI, který s Dockerem velmi úzce souvisí. Další školení naleznete na mém webu <a href="https://ondrej-sika.cz">ondrej-sika.cz</a>.<br /><br />
Všechny kurzy vedu osobně. S Gitlab CI mám zkušenosti z mnoha různých projektů a firem. Téměř všechny projekty na kterých pracuji využívají Gitlab CI. Gitlab CI mi velmi ulehčuje a zrychluje práci - nemusím se starat o rutinní akce jako nasazování nebo build aplikace a mohu se věnovat vývoji a činnostem které mi přinášejí zisk.
        `}
        />
      </TextFrameWithImage>

      <MyClients HeaderClients="Moji nejvýznamější klienti" />

      <ThreeCol
        header="Reference"
        col1={<Recommendation id="bohemiaenergy" lang={site.lang} />}
        col2={<Recommendation id="vse" lang={site.lang} />}
        col3={<Recommendation id="sit" lang={site.lang} />}
      />
      <TextFrame>
        <Markdown
          source={`
### Mám zájem o školení
Pokud máte zájem o školení, neváhejte mě kontaktovat - [Nezávazně poptat školení](https://ondrej-sika.cz/skoleni/gitlab-ci/poptavka/)
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Cena
Pokud máte zájem o školení u vás ve firmě, [nezávazně jej poptejte](https://ondrej-sika.cz/skoleni/gitlab-ci/poptavka/) nebo mi napište email na <ondrej@sika.io>
- Otevřený termín: 6800 CZK bez DPH
- Firemní školení: 25 000 CZK bez DPH
`}
        />
      </TextFrame>
      <Contact />
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
