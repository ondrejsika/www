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
import Head from "next/head";
import Markdown from "@app/common/components/Markdown";
import FooterOndrejSika from "@app/course-landing/components/FooterOndrejSika";
import site from "@app/kubernetes-schulung.de/config";

const Index = () => (
  <div>
    <Head>
      <title>
        Kuberneres Schulungen, Sika Kraml - kubernetes-schulungen.de
      </title>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Kubernetes Schulung Deutschland 🇩🇪"
      byName="Sika Kraml GbR"
      byUrl="https://sika-kraml.de/kontakt/?x_source=kubernetes-schulung.de"
      logoUrl="/static/kubernetes.png"
    >
      <HeaderLink url="mailto:schulungen@sika-kraml.de?subject=[sika-kraml.de] Kubernetes Schulung Angebot">
        Nezávazně poptat školení
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skoleni-docker.cz">
        Kontaktovat
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### Co je to Kubernetes

Docker je dnes technologie, která proces vývoje, testování a provozování softwaru velmi zjednodušuje. Provozujte cokoliv a kdekoliv. Už nečekejte na nastavení vašeho serveru nebo na aktualizaci nějaké knihovny. Mějte prostředí jako součást vaší aplikace.
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Jak školení probíhá

Na školení Úvod do práce s Dockerem si ukážeme vše jak s Dockerem pracovat od vytvoření vlastního kontejnerů po jeho provozování ve Swarmu. Vše si prakticky vyzkoušíme a osaháme.
`}
        />
      </TextFrame>
      <TextFrame header="">
        <Markdown
          source={`
### Co Vás naučím

- Teoretický úvod do Dockeru
- Instalace Dockeru (pro ty kteří nenainstalovali doma)
- Práce s kontejnery
- Práce s obrazy
- Docker Compose - vicekontejnerove aplikace v Dockeru
- Deployment do Swarmu
- Ukázka deploymentu do Kubernetes
`}
        />
      </TextFrame>
      <TextFrame header="">
        <Markdown
          source={`
### Pro koho je školení určeno

Školení je primárně určeno lidem, kteří nemají s Dockerem žádné (nebo malé) zkušenosti. Školení nepočítá s předchozími znalostmi Dockeru. Je vhodné pro vývojáře nebo devops (server administrátory), kteří chtějí Docker využívat v praxi nebo chtějí mít přehled co Docker řeší a kde by jej mohli použít.
`}
        />
        <TwoCol
          col1={
            <Markdown
              source={`
#### Předchozí znalosti

- Základy práce s Linuxem
- Základy práce v terminálu
`}
            />
          }
          col2={
            <Markdown
              source={`
#### Technické požadavky

- Nainstalovaný Docker, [návod na instalaci](https://www.ondrej-sika.cz/docker/instalace/)
- Přístup na internet - ideálně bez korporátní proxy, případně nastavenou proxy v prohlížeči
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
Jmenuji se Ondřej Sika, vyvíjím software pro Slush Pool a školím. Školím převážně Docker a CI, který s Dockerem velmi úzce souvisí. Další školení naleznete na mém webu ondrej-sika.cz.
Všechny kurzy vedu osobně. S Dockerem mám více než čtyři roky zkušeností v rámci komerčního vývoje softwaru. Docker používám denně jak ve vývoji, tak i na produkci a práci bez něj nedovedu už ani představit.
        `}
        />
      </TextFrameWithImage>
      <MyClients HeaderClients="Moji nejvýznamější klienti" />
      <ThreeCol
        header="Reference"
        col1={<Recommendation id="dimensiondata" lang={site.lang} />}
        col2={<Recommendation id="webglobe-yegon" lang={site.lang} />}
        col3={<Recommendation id="sit" lang={site.lang} />}
      />

      <TextFrame>
        <Markdown
          source={`
### Mám zájem o školení

Pokud máte zájem o školení, neváhejte mě kontaktovat - [Nezávazně poptat školení](https://ondrej-sika.cz/skoleni/kubernetes/poptavka/)
`}
        />
      </TextFrame>

      <TextFrame>
        <Markdown
          source={`
### Cena

Pokud máte zájem o školení u vás ve firmě, [nezávazně jej poptejte](https://ondrej-sika.cz/skoleni/kubernetes/poptavka/) nebo mi napište email na <ondrej@sika.io>

- Otevřený termín: 11 999 CZK bez DPH
- Firemní školení: 50 000 CZK bez DPH
`}
        />
      </TextFrame>
      <Contact />
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
