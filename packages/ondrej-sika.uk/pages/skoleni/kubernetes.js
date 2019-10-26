import Markdown from "@app/common/components/Markdown";
import Header from "@app/ondrej-sika.cz/components/Header";
import TextArea from "@app/ondrej-sika.cz/components/TextArea";
import TwoCol from "@app/ondrej-sika.cz/components/TwoCol";
import References from "@app/ondrej-sika.cz/components/References";
import Price from "@app/ondrej-sika.cz/components/Price";
import Form from "@app/ondrej-sika.cz/components/Form";

import Head from "next/head";

let site = {
  lang: "cs"
};

const Index = () => (
  <div>
    <Head></Head>
    <Header
      websiteHeader="Školení Kubernetes"
      inquiryBtn="Nezávazně poptat školení"
      logo="/static/kubernetes.png"
    ></Header>
    <div className="container course-page">
      <Markdown
        source={`
### Co je to Kubernetes
Kubernetes jsou dnes nejrozšířenější platformou na hostování Docker kontejnerů a jsou podporovány velkými hráči na trhu (Google, Amazon, Microsoft) skrz Cloud Native Computing Foundation. Kuberneres pro provoz používají všechny velikosti firem, od startupu po korporace.
### Jak školení probíhá
Školeni probíhá formou workshopů, vše si prakticky vyzkoušíme a osaháme. Ukážeme jak spustit Kuberneres lokálně (pro vývoj) a na cloudové platformě Digital Ocean.
### Co Vás naučím
- Teoretický úvod do Kubernetes
- Instalace Minikube a kubectl (pro ty kteří nenainstalovali doma)
- Popis Kubernetes komponent
- Deployment do Kubernetes
- Práce s právy v Kubernetes clusteru
- Teoretický úvod do Helm balíčku
- Instalace / Deployment pomocí Helmu
- Psaní vlastního Helm balíčku
#### Pro koho je školení určeno
Školení je určeno pro lidi (vývojáři a devops), kteří mají zájem provozovat své Docker aplikace v Kuberneres.`}
      />
      <TwoCol
        col1={
          <Markdown
            source={`
#### Předchozí znalosti
- Základy práce s Linuxemm
- Základy práce v terminálu
- Základy práce s Dockerem
          `}
          />
        }
        col2={
          <Markdown
            source={`
#### Technické požadavky
- Nainstalovaný Kubernetes
- Přístup na internet - ideálně bez korporátní proxy, případně nastavenou proxy v prohlížeči
          `}
          />
        }
      />
    </div>
    <References ids={["oxy", "oxyCTO"]} lang={site.lang} />
    <Price PriceHeader="Cena za školení" PriceBtn="Nezávazně poptat školení">
      Otevřený termín: 11 999 CZK bez DPH
      <br />
      Firemní školení: 50 000 CZK bez DPH
    </Price>
    <div className="container">
      <TextArea
        TextHeader="Poptávka firemního školeni Kubernetes"
        TextParagraph="Pole označené * jsou povinné."
      >
        <Form
          course="Kubernetes"
          FormName="Jméno *"
          FromNamePlaceholder="Anton Hrabiš"
          FormCompany="Společnost"
          FormCompanyPlaceholder="Drůbežárny"
          FormEmail="Email *"
          FormEmailPlaceholder="anton@hrabis.cz"
          FormPhone="Telefon *"
          FormPhonePlaceholder="+420111222333"
          FormSent="Odeslat"
        />
      </TextArea>
    </div>
  </div>
);

export default Index;
