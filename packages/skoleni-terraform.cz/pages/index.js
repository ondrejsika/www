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
import site from "../config";
import TwitterRecommendations from "@app/course-landing/components/TwitterRecommendations";

import terraform_logo from "@app/data/pictures/courses/terraform-white.png";
import ondrejsika_image from "@app/data/pictures/ondrejsika.jpg";

const Index = () => (
  <div>
    <Head>
      <title>Školení Terraform, Ondrej Sika - skoleni-terraform.cz</title>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Školení Terraform"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=skoleni-terraform.cz"
      logoUrl={terraform_logo}
    >
      <HeaderLink url="https://ondrej-sika.cz/skoleni/terraform/#form">
        Nezávazně poptat školení
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skoleni-terraform.cz">
        Kontaktovat
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### Co je Terraform a k čemu Vám bude dobrý

Terraform je nástroj, který se používá ke správě infrastruktury v cloudu, jak veřejném (AWS, Azure, GCP), tak privátním (OpenStack, VMware vSphere).

Terraform Vám umožní __spravovat infrastruktutru jako kód__, to znamená verzovanou v Gitu, přidávání resources pomocí merge (pull) requestů a mnoho dalších výhod. Infrastrukturu můžete dále nasadit do testovacího prostředí přesně tak, jako je v produkci bez zbytečného úsilí. O všech komponentách máte přehled a můžete predikovat ceny. Konec klikání infrastruktury, zkuste Terraform.

Terraform umožnuje spravat více cloudových providerů současně, zároveň umožnuje pracovat s hybridními cloudy (část v privátním cloudu, část ve veřejném).
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Jak školení probíhá

Školení je formou workshopu, všechno si podrobně vyzkoušíme a vysvětlíme. Ukážeme si jak Terraform pracuje, jak jej používat v teamu a jak jím spravovat infrastukturu. Uděláme si příklad infrastruktury jednoduché aplikace, kde nastavíme vše - od DNS, přes Kubernetes cluster po S3 file storage.
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Co Vás naučím

- Základní koncept Terraformu
- Výhody Terraformu proti Ansible, Puppetu, ...
- Konfigurace Terraformu pro práci v teamu
- Ovládání Terraform CLI
- Úvod do Terraform Configuration Language (HCL)
- Terraform Providers - napojení na cloudy
- Práce s resources v Terraformu
- Terraform moduly
- Best Practice
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Pro koho je školení určeno

Školení je určeno pro DevOps a adminy, kteří chtějí lépe a efektivněji spravovat infrastrukturu. Zároveň také pro vývojáře, kteří se starají o nějakou infrastrukturu v cloudech.
`}
        />
        <TwoCol
          col1={
            <Markdown
              source={`
#### Předchozí znalosti

- Základní znalost veřejných cloudů (AWS, Digital Ocean, Azure, ...)
- Základy práce v terminálu
            `}
            />
          }
          col2={
            <Markdown
              source={`
#### Technické požadavky

- [Nainstalovaný Terraform](/terraform/instalace)
- Přístup na internet (ideálně bez korporátní proxy)
- Vlastní účet v Digital Oceanu výhodou - [Registrace + 50 USD kredit](https://sika.link/do-ref)
`}
            />
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Lektor: Ondřej Šika"
        imgUrl={ondrejsika_image}
      >
        Jmenuji se Ondřej Šika, vyvíjím software pro Slush Pool a školím.
        Terraform používám na denní bázy a všechnu infrastrukturu na veřejných
        cloudech jím zpravuji. Šetří mi to čas a mám dokolaný přehled kde mi co
        běží.
      </TextFrameWithImage>

      {/* <MyClients lang={site.lang} />
      <ThreeCol
        header="Reference"
        col1={<Recommendation id="dimensiondata" lang={site.lang} />}
        col2={<Recommendation id="webglobe-yegon" lang={site.lang} />}
        col3={<Recommendation id="sit" lang={site.lang} />}
      />
      <TextFrame>
        <Markdown
          source={`
### Ohlasy z Twitteru
`}
        />
        <TwitterRecommendations
          ids={["petr-todorov-kubernetes", "pavel-mattivi-kubernetes"]}
        />
      </TextFrame> */}
      <TextFrame>
        <Markdown
          source={`
### Mám zájem o školení
Pokud máte zájem o školení, neváhejte mě kontaktovat - [Nezávazně poptat školení](https://ondrej-sika.cz/skoleni/terraform#form/)
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Cena

Pokud máte zájem o školení u vás ve firmě, [nezávazně jej poptejte](https://ondrej-sika.cz/skoleni/terraform#form) nebo mi napište email na <ondrej@sika.io>

- Otevřený termín: 5 999 CZK bez DPH
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
