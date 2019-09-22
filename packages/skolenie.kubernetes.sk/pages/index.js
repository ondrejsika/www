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
import Contact from "@app/course-landing/components/ContactSK";
import Head from "next/head";
import Markdown from "@app/common/components/Markdown";
import site from "@app/skoleni-kubernetes.cz/config";

const Index = () => (
  <div>
    <Head>
      <title>Školenie Kuberneres, Ondrej Sika - skoleni-kubernetes.cz</title>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Školenie Kubernetes 🇸🇰"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=skolenie-kubernetes.sk"
      logoUrl="/static/kubernetes.png"
    >
      <HeaderLink url="mailto:ondrej@sika.io?subject=[skolenie-kubernetes.sk] Poptavka firemniho skoleni Kubernetes">
        Nezáväzne popýtať školenie
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skolenie-kubernetes.sk">
        Kontaktovať
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### Popis technológie
Kubernetes je dnes najrozšírenejšou platformou na hostovanie Docker kontajnerov a je podporovaná velkými hráčmi na trhu (Google, Amazon, Microsoft) cez Cloud Native Computing Foundation. Kubernetes bežne používajú firmy rôznych veľkostí, od startupov až po korporácie.
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Ako školenie prebieha
Školenie prebieha formou workshopu, všetko si prakticky vyskúšame. Ukážeme si ako spustiť Kubernetes lokálne (pre vývoj) a na cloudové platforme Digital Ocean. Povieme si o základnej štruktúre Kubernetes a prejdeme si jeho kompomenty. Naučíme sa ako napísať Kubernetes manifest a ako pomocou neho nasadiť aplikáciu v Dockeri. Ďalej si ukážeme ako pracovať s právami v Kubernetes a ako používať (a písať) Kubernetes balíčky v Helme.
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Čo Vás naučím
- Teoretický úvod do Kubernetes
- Inštalácia Minikube a kubectl (tých, ktorí ho nenainštalovali doma)
- Popis Kubernetes komponentov
- Deployment do Kubernetes
- Pracovať s právami v Kubernetes clusteri
- Teoretický úvod do Helm balíčku
- Inštalácia / Deployment pomocí Helmu
- Písanie vlastného Helm balíčku
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Pre koho je školenie určené
Školenie je určené pre ľudí (vývojárov a DevOps), ktorí majú záujem prevádzkovať svoje Docker aplikácie v Kubernetes.
`}
        />
        <TwoCol
          col1={
            <Markdown
              source={`
#### Predchádzajúce znalosti
- Základy práce s Dockerom
- Základy práce s Linuxom
- Základy práce v terminále
            `}
            />
          }
          col2={
            <Markdown
              source={`
#### Technické požiadavky
- Nainštalovaný Kubernetes, návod na inštaláciu: [tu](https://www.ondrej-sika.cz/kubernetes/instalace/)
- Přístup na internet - ideálne bez korporátnej proxy, prípadne nastavenú proxy v prehliadači
`}
            />
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Lektor: Ondřej Šika"
        imgUrl="/static/ondrejsika.jpg"
      >
        Volám sa Ondřej Šika, vyvíjam softvér pre Slush Pool a školím.
        Kubernetes som školil vo firmách ako je CGI alebo Webglobe - Yegon.
        Školím prevažne Docker, ktorý s Kubernetes veľmi úzko súvisí. Ďalšie
        školenia nájdete na mojom webe
        [ondrej-sika.cz](https://www.ondrej-sika.cz/).
        <br />
        <br />
        Všetky kurzy vediem osobne. Kubernetes používam ako platformu pre
        väčšínu svojich projektov a je to jeden z najjednoduchších spôsobov ako
        prevádzkovať Docker kontajnery.
      </TextFrameWithImage>

      <MyClients lang={site.lang} />
      <ThreeCol
        header="Referencie"
        col1={<Recommendation id="dimensiondata" lang={site.lang} />}
        col2={<Recommendation id="webglobe-yegon" lang={site.lang} />}
        col3={<Recommendation id="sit" lang={site.lang} />}
      />

      <TextFrame>
        <Markdown
          source={`
### Mám záujem o školenie
Ak máte záujem o školenie, neváhajte ma kontaktovať - [Nezáväzne popýtať školenie](https://ondrej-sika.cz/skoleni/kubernetes/poptavka/)
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Cena
Ak máte záujem o školenie u vás vo firme, [nezáväzne ho popýtajte](https://ondrej-sika.cz/kubernetes/poptavka/) alebo mi napíšte email na ondrej@sika.io
- Otvorený termín (self funded): 389 EUR bez DPH
- Otvorený termín (company funded): 589 EUR bez DPH
- Firemné školenie (vo firme): 1550 EUR bez DPH
`}
        />
      </TextFrame>
      <Contact />
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
