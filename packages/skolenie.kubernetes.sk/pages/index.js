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
import site from "@app/skolenie.kubernetes.sk/config";

const Index = () => (
  <div>
    <Head>
      <title>Skolenie Kuberneres, Ondrej Sika - skolenie.kubernetes.sk</title>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Skolenie Kubernetes Slovensko 🇸🇰"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=skoleni-kubernetes.cz"
      logoUrl="/static/kubernetes.png"
    >
      <HeaderLink url="https://ondrej-sika.cz/skoleni/kubernetes/poptavka/?x_source=skoleni-kubernetes.cz">
        Nezávazně poptat školení
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skoleni-kubernetes.cz">
        Kontaktovat
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### Popis technologie
Kubernetes jsou dnes nejrozšířenější platformou na hostování Docker kontejnerů a jsou podporovány velkými hráči na trhu (Google, Amazon, Microsoft) skrz Cloud Native Computing Foundation. Kuberneres pro provoz používají všechny velikosti firem, od startupu po korporace.
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Jak školení probíhá
Školeni probíhá formou workshopů, vše si prakticky vyzkoušíme a osaháme. Ukážeme jak spustit Kuberneres lokálně (pro vývoj) a na cloudové platformě Digital Ocean. Dozvíme se základní strukturu Kubernetes a projdeme si jeho komponenty. Naučíme se jak napsat Kubernetes manifest a jak jim nasadit aplikaci v Dockeru. Dále si ukážeme jak pracovat s právama v Kubernetes a jak používat (a psát) Kubernetes balíčky v Helmu.
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Co Vás naučím
- Teoretický úvod do Kubernetes
- Instalace Minikube a kubectl (pro ty kteří nenainstalovali doma)
- Popis Kubernetes komponent
- Deployment do Kubernetes
- Práce s právy v Kubernetes clusteru
- Teoretický úvod do Helm balíčku
- Instalace / Deployment pomocí Helmu
- Psaní vlastního Helm balíčku
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Pro koho je školení určeno
Školení je určeno pro lidi (vývojáři a devops), kteří mají zájem provozovat své Docker aplikace v Kuberneres.
`}
        />
        <TwoCol
          col1={
            <Markdown
              source={`
#### Předchozí znalosti
- Základy práce s Dockerem
- Základy práce s Linuxem
- Základy práce v terminálu
            `}
            />
          }
          col2={
            <Markdown
              source={`
#### Technické požadavky
- Nainstalovaný Kubernetes, návod na instalaci: [zde](https://www.ondrej-sika.cz/kubernetes/instalace/)
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
        Jmenuji se Ondřej Šika, vyvíjím software pro Slush Pool a školím.
        Kubernetes jsem školil ve firmách jako je CGI nebo Webglobe - Yegon.
        Školím převážně Docker, který s Kubernetes velmi úzce souvisí. Další
        školení naleznete na mém webu ondrej-sika.cz.
        <br />
        <br />
        Všechny kurzy vedu osobně. Kubernetes používám jako platformu pro
        většinu svých projektů a je to jeden z nejjednodušších způsobů jak
        provozovat Docker kontejnery.
      </TextFrameWithImage>

      <MyClients lang={site.lang} />
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

Pokud máte zájem o školení u vás ve firmě, [nezávazně jej poptejte](https://ondrej-sika.cz/skoleni/kubernetes/poptavka/) nebo mi napište email na <ondrej@ondrejsika.com>

- Otevřený termín (self funded): 9 999 CZK bez DPH
- Otevřený termín (company funded): 14 999 CZK bez DPH
- Firemní školení (ve firmě): 40 000 CZK bez DPH
`}
        />
      </TextFrame>
      <Contact />
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
