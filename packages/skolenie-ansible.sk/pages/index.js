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
import Contact from "@app/course-landing/components/ContactSK";
import FooterOndrejSika from "@app/course-landing/components/FooterOndrejSika";
import Head from "next/head";
import site from "@app/skolenie-ansible.sk/config";

const Index = () => (
  <div>
    <Head>
      <title>Školenie Ansible, Ondrej Sika - skolenie-ansible.sk</title>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Skolenie Ansible Slovensko 🇸🇰"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=ansible-skoleni.cz"
      logoUrl="/static/ansible.png"
    >
      <HeaderLink url="https://ondrej-sika.cz/skoleni/ansible/poptavka/?x_source=ansible-skoleni.cz">
        Nezáväzne popýtať školenie
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=ansible-skoleni.cz">
        Kontaktovať
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### Popis technológie
Ansible je nástroj na hromadnú správu konfigurácií a nasadzovanie. Vy deklarujete výsledný stav serveru a služieb a Ansible sa postará o vykonanie. Nemusíte riešiť v akom stave je server alebo aplikácia aktuálne, Ansible vám zariadi požadovaný výsledok (výhoda deklaratívnej syntax, napríklad shell script je imperatívny - vykonaj to a to . ..). Akúkoľvek konfiguráciu máte verzovanú Gitom a nestane sa Vám, že stratíte prehľad o tom, čo kde máte alebo že vynecháte nejaký dôležitý krok. Ansible Vám pomôže nasadzovať aplikácie a spravovať servery rýchlejšie a bezpečnejšie.
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Ako školenie prebieha
Školenie prebieha formou workshopu, všetko si prakticky vyskúšame. Ansible si spoločne nainštalujeme, popíšeme si ako pracuje a základné koncepty. Skúsime si nastaviť server (tetovací na DiditalOcean) a nasadiť aplikáciu od začiatku až do konca. Od inštalácie systémových balíčkov, cez stiahnutie aplikácie z Gitu, po vytvorenie šablón konfiguračných skriptov a nastavenie secretes (napríklad hesiel). Po absolvovaní kurzu budete schopní používať Ansible na dennej báze a zjednodušiť si nasadzovanie a konfiguračné rutiny.
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Čo Vás naučím
- Základný koncept Ansible
- Inštaláciu Ansible (tých, ktorí ho nenainštalovali doma)
- Základné ovládanie Ansible
- Playbooks
- Moduly
- Šablóny
- Secrets
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Pre koho je školenie určené
Školenie je určené hlavne adminom a DevOps (serverovým administrátorom), ktorí chcú začať Ansible používať. Zároveň je vhodné i pre vývojárov, ktorí občas nasadzujú (aj do testovacích prostredí) svoje aplikácie a chcú si tento proces zjednodušiť.
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
- Nainštalovaný Ansible, [návod na inštaláciu](https://www.ondrej-sika.cz/ansible/instalace/)
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
Volám sa Ondřej Šika, vyvíjam softvér pre Slush Pool a školím. Všetky kurzy vediem osobne. Ansible používam ako nástroj na správu serverov i osobných počítačov (tých s Linuxom, predtým som používal Puppet ale prešiel som na Ansible). Okrem toho sa snažím používať Ansible na správu takmer všetkého, od užívateľov v databázach až po DNS záznamy na Cloudflare.
        `}
        />
      </TextFrameWithImage>

      <MyClients lang={site.lang} />
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
Ak máte záujem o školenie, neváhajte ma kontaktovať - [Nezáväzne popýtať školenie](https://ondrej-sika.cz/ansible/poptavka/)
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Cena
Ak máte záujem o školenie u vás vo firme, [nezáväzne ho popýtajte](https://ondrej-sika.cz/ansible/poptavka/) alebo mi napíšte email na ondrej@sika.io
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
