import FooterSikaKraml from "@app/course-landing/components/FooterSikaKraml";
import Header from "@app/course-landing/components/Header";
import HeaderLink from "@app/course-landing/components/HeaderLink";
import TextFrame from "@app/course-landing/components/TextFrame";
import TextFrameWithImage from "@app/course-landing/components/TextFrameWithImage";
import MyClients from "@app/course-landing/components/MyClients";
import References from "@app/course-landing/components/References";
import ThreeCol from "@app/course-landing/components/ThreeCol";
import someone from "@app/course-landing/components/References/someone.jpg";
import jurajboldis from "@app/course-landing/components/References/jurajboldis.jpg";
import martinkylian from "@app/course-landing/components/References/martinkylian.jpg";
import TwoCol from "@app/course-landing/components/TwoCol";
import Navigation from "@app/course-landing/components/Navigation";
import ButtonOutline from "@app/course-landing/components/ButtonOutline";
import Recommendation from "@app/course-landing/components/Recommendation";
import Contact from "@app/course-landing/components/Contact";
import Head from "next/head";
import Markdown from "@app/common/components/Markdown";
import FooterOndrejSika from "@app/course-landing/components/FooterOndrejSika";
import site from "@app/dockerschulung.de/config";
import Link from "next/link";

const Index = () => (
  <div>
    <Head>
      <title>Docker Schulung</title>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Docker Schulung Deutschland 🇩🇪"
      byName="Ondrej Sika"
      byUrl="https://sika-kraml.de/kontakt/?x_source=dockerschulung.de"
      logoUrl="/static/docker-w.svg"
    >
      <HeaderLink url="mailto:schulungen@sika-kraml.de?subject=[sika-kraml.de] Docker Schulung Angebot">
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
## Co je to Docker
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
      <TextFrame>
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
      <TextFrame>
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
        col1={<Recommendation id="vse" lang={site.lang} />}
        col2={<Recommendation id="spel" lang={site.lang} />}
        col3={<Recommendation id="vse" lang={site.lang} />}
      />

      <TextFrame>
        <Markdown
          source={`
### Mám zájem o školení
Pokud máte zájem o školení, neváhejte mě kontaktovat
        `}
        />
        <ButtonOutline btnUrl="https://ondrej-sika.cz/skoleni/docker/poptavka/">
          Nezávazně poptat školení
        </ButtonOutline>
      </TextFrame>

      <TextFrame header="Cena">
        Pokud máte zájem o školení u vás ve firmě,{" "}
        <Link href="https://ondrej-sika.cz/skoleni/docker/poptavka/">
          <a className="btn btn-large mybutton-outline">
            nezávazně jej poptejte
          </a>
        </Link>{" "}
        nebo mi napište email na{" "}
        <Link>
          <a href="mailto:ondrej@sika.io">ondrej@sika.io</a>
        </Link>
        <br />
        Otevřený termín (self funded): 9 999 CZK bez DPH
        <br />
        Otevřený termín (company funded): 14 999 CZK bez DPH
        <br />
        Firemní školení (ve firmě): 50 000 CZK bez DPH
      </TextFrame>
      <Contact />
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
