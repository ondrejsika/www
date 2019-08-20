import Header from "@app/course-landing/components/Header";
import HeaderLink from "@app/course-landing/components/HeaderLink";
import TextFrame from "@app/course-landing/components/TextFrame";
import TextFrameWithImage from "@app/course-landing/components/TextFrameWithImage";
import MyClients from "@app/course-landing/components/MyClients";
import ThreeCol from "@app/course-landing/components/ThreeCol";
import TwoCol from "@app/course-landing/components/TwoCol";
import Navigation from "@app/course-landing/components/Navigation";
import Markdown from "@app/common/components/Markdown";
import FooterOndrejSika from "@app/course-landing/components/FooterOndrejSika";
import Recommendation from "@app/course-landing/components/Recommendation";
import Head from "next/head";
import site from "@app/skolenie-git.sk/config";

const Index = () => (
  <div>
    <Head>
      <title>Skolenie Git, Ondrej Sika - skolenie-git.sk</title>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Skolenie Gitu Slovensko 🇸🇰"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=skoleni-git.cz"
      logoUrl="/static/git.svg"
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
### Co je to Git?
Git je moderní verzovaci nástroj, který se stal defaco standatem mezi vývojáři. Používají jej na denní bazy jednotlivci, startupy i korporace. Git vám nabízí jednoduchou kolaboraci na projektu s více lidmi a práci na více částech současně ani by jste si zasahovali do rozdělaných věcí nebo je jinak narušovali. Spolupráci na vývoji projektu ještě zlepšuje Gitlab, což je kolaborativni platforma na návrh, vývoj a provozování software (více o Gitlabu v samostatném kurzu).
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Jak školení probíhá
Na školení formou workshopu si vysvětlíme proč je dobré Git používat, jak funguje (proč dnes nemá konkurenty) a best practise. Ukážeme si vše od instalace a základního nastavení Gitu, přez jednoduchou práci na jedné větvi až po práci v teamu a s více větvemi za pomoci různých mergovacich strategii (merge, rebase). Ukážeme si výhody a nevýhody obou z nich a je pak na Vás jak to budete dělat. Také si ukážeme jak se dostat ze špatných situací, jako omylem jsem si všechno smazal a podobně.
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Co Vás naučím
- Instalace a konfigurace GITu
- Vytvořit nový repozitář
- Základní ovládání GITu
- Práce v jedné větvi
- Práce ve větvích - merge, rebase (silná stránka Gitu)
- Práce se vzdálenými repozitáři
- Záchrana smazaných dat z repozitáře
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Pro koho je školení určeno
Školení je určeno primárně pro vývojáře, kteří neverzují vůbec nebo nepoužívají Git. Zároveň je vhodné i pro ty, kteří Git nevyužívají na 100% (git commit, git pull, git push). Ať jde o malé weby nebo velké projekty, Git si najde uplatnění. Dále je kurz vhodný i pro ty, kteří nepíšou kód tak často, ale občas potřebují něco zaverzovat, například nějaké migrační skripty DB a nebo konfiguraci serveru. Git pomůže i DBA nebo DevOps.
`}
        />
        <TwoCol
          col1={
            <Markdown
              source={`
#### Předchozí znalosti
- Základy programování
- Základy práce v terminálu výhodou
- Základní znalost Gitu výhodou
            `}
            />
          }
          col2={
            <Markdown
              source={`
#### Technické požadavky
- Nainstalovaný Git
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
Jmenuji se Ondřej Sika, vyvíjím software pro Slush Pool a školím. Všechny kurzy vedu osobně. S GITem mám více než 7 let zkušeností v rámci komerčního vývoje software. Práci bez Gitu si dnes nedokážu vůbec představit. Kromě zdrojových kódů verzuji konfiguraci, nastavení sertveru, …Problematiku kolem verzování a vývoje software obecně školím více než 3 roky. Git je kurz se, kterým jsem začínal a pořád je populární.
        `}
        />
      </TextFrameWithImage>

      <MyClients HeaderClients="Moji nejvýznamější klienti" />
      <ThreeCol
        header="Reference"
        col1={<Recommendation id="dimensiondata" lang={site.lang} />}
        col2={<Recommendation id="bohemiaenergy" lang={site.lang} />}
        col3={<Recommendation id="sit" lang={site.lang} />}
      />
      <TextFrame>
        <Markdown
          source={`
### Mám zájem o školení
Pokud máte zájem o školení, neváhejte mě kontaktovat - [Nezávazně poptat školení](https://ondrej-sika.cz/skoleni/git/poptavka/)
`}
        />
      </TextFrame>

      <TextFrame>
        <Markdown
          source={`
### Cena
Pokud máte zájem o školení u vás ve firmě, [nezávazně jej poptejte](https://ondrej-sika.cz/skoleni/git/poptavka/) nebo mi napište email na ondrej@ondrejsika.com
- Otevřený termín (self funded): 4 999 CZK bez DPH
- Otevřený termín (company funded): 6 999 CZK bez DPH
- Firemní školení (ve firmě): 20 000 CZK bez DPH
        `}
        />
      </TextFrame>
      <TextFrame header="Navazující kurzy">
        <a href="https://ondrej-sika.cz/skoleni/gitlab-ci">Gitlab CI</a>
      </TextFrame>
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
