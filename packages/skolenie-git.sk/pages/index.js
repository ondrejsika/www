import Header from "@app/course-landing/components/Header";
import HeaderLink from "@app/course-landing/components/HeaderLink";
import TextFrame from "@app/course-landing/components/TextFrame";
import TextFrameWithImage from "@app/course-landing/components/TextFrameWithImage";
import MyClients from "@app/course-landing/components/MyClients";
import ThreeCol from "@app/course-landing/components/ThreeCol";
import TwoCol from "@app/course-landing/components/TwoCol";
import Navigation from "@app/course-landing/components/Navigation";
import Contact from "@app/course-landing/components/ContactSK";
import Markdown from "@app/common/components/Markdown";
import FooterOndrejSika from "@app/course-landing/components/FooterOndrejSika";
import Recommendation from "@app/course-landing/components/Recommendation";
import Head from "next/head";
import site from "@app/skolenie-git.sk/config";
import Link from "next/link";

const Index = () => (
  <div>
    <Head>
      <title>Školenie Git, Ondrej Sika - skolenie-git.sk</title>
      <link
        href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Skolenie Gitu 🇸🇰"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=skolenie-git.sk"
      logoUrl="/static/git.svg"
    >
      <HeaderLink url="mailto:ondrej@sika.io?subject=[skolenie-git.sk] Poptavka firemniho skoleni Gitu">
        Nezáväzne popýtať školenie
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skolenie-git.sk">
        Kontaktovať
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### Čo je to Git?
Git je moderný verzovací nástroj, ktorý sa stal de facto štandardom medzi vývojármi. Na dennej báze ho používajú jednotlivci, startupy aj korporácie. Vďaka Gitu je kolaborácia viacerých ľudí na jednom projekte jednoduchá, a to aj v prípade, že pracujete spoločne na niekoľkých častiach projektu súčasne. Dokonca bez toho, aby ste si do rozpracovaných vecí nechcene zasahovali. Spoluprácu na vývoji projektu ešte zlepšuje Gitlab, kolaboratívna platforma, ktorá slúži na návrh, vývoj a prevádzku softvéru (viac o Gitlabe v samostatnom kurze).
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Ako školenie prebieha
Na školení si formou workshopu vysvetlíme prečo je dobré Git používať, ako funguje, prečo dnes nemá konkurenciu a best practice. Ukážeme si všetko od inštalácie a základného nastavenia Gitu, cez jednoduchú prácu na jednej vetve až po prácu v teame a s viacerými vetvami za pomoci rôznych mergovacích stratégií (merge, rebase). Ukážeme si ich výhody a nevýhody a bude len na Vás ako sa rozhodnete s nimi pracovať. Tiež si ukážeme, ako sa dostať z nepríjemných situácií, ako napríklad, keď si omylom všetko vymažete a pod.
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Čo Vás naučím
- Inštalácia a konfigurácia GITu
- Vytvorenie nového repozitára
- Základné ovládanie GITu
- Práca na jednej vetve
- Práca s viacerými vetvami - merge, rebase (silná stránka Gitu)
- Práca so vzdialenými repozitármi
- Záchrana zmazaných dát z repozitára
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Pre koho je školenie určené
Školenie je určené primárne pre vývojárov, ktorí vôbec neverzujú alebo nepoužívajú Git. Zároveň je vhodné pre tých, ktori Git nevyužívajú na 100% (git commit, git pull, git push). Či už ide o malé weby, alebo veľké projekty, Git si nájde svoje uplatnenie. Kurz je vhodný aj pre tých, ktorí nepíšu kód často, ale občas potrebujú niečo zaverzovať, napríklad nejaké migračné skripty DB alebo konfiguráciu serveru. Git pomôže i DBA (databázovým administrátorom) alebo DevOps (serverovým administrátorom).
`}
        />
        <TwoCol
          col1={
            <Markdown
              source={`
#### Predchádzajúce znalosti
- Základy programovania
- Základy práce v terminále výhodou
- Základná znalosť Gitu výhodou
            `}
            />
          }
          col2={
            <Markdown
              source={`
#### Technické požiadavky
- Nainštalovaný Git
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
Volám sa Ondřej Šika, vyvíjam softvér pre Slush Pool a školím. Všetky kurzy vediem osobne. S Gitom mám viac ako 7 ročné skúsenosti v rámci komerčného vývoja softvéru. Pracovať bez Gitu si dnes už vôbec nedokážem predstaviť. Okrem zdrojových kódov verzujem konfiguráciu i nastavenie serveru. Problematiku verzovania a vývoja softvéru školím viac ako 3 roky. Git je kurz s ktorým som začínal a je stále veľmi populárny.
        `}
        />
      </TextFrameWithImage>

      <MyClients HeaderClients="Moji najvýznamejší klienti" />
      <ThreeCol
        header="Referencie"
        col1={<Recommendation id="dimensiondata" lang={site.lang} />}
        col2={<Recommendation id="bohemiaenergy" lang={site.lang} />}
        col3={<Recommendation id="sit" lang={site.lang} />}
      />
      <TextFrame>
        <Markdown
          source={`
### Mám záujem o školenie
Ak máte záujem o školenie, neváhajte ma kontaktovať - [Nezáväzne popýtať školenie](https://ondrej-sika.cz/skoleni/git/poptavka/)
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
      <TextFrame header="Navazující kurzy">
        <Link href="https://ondrej-sika.cz/skoleni/gitlab-ci">
          <a>Gitlab CI</a>
        </Link>
      </TextFrame>
      <Contact />
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
