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
import site from "@app/ansible-skoleni.cz/config";

const Index = () => (
  <div>
    <Head>
      <title>Školení Ansible, Ondrej Sika - ansible-skoleni.cz</title>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Školení Ansible"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=ansible-skoleni.cz"
      logoUrl="/static/ansible.png"
    >
      <HeaderLink url="mailto:ondrej@sika.io?subject=[ondrej-sika.cz] Poptavka firemniho skoleni Ansible">
        Nezávazně poptat školení
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=ansible-skoleni.cz">
        Kontaktovat
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### Popis technologie
Ansible je nástroj na hromadnou správu konfiguraci a nasazování. Vy deklarujete vysledný stav serveru a služeb a Ansible se postará o provedení. Nemusíte řešit v jakém stavu je server nebo aplikace ted, Ansible vám zařídí požadovaný výsedek (výhoda deklarativní syntaxe, napřiklad shell script je imperativní - proveď to a to ...). Veškerou konfiguraci máte verzovanou Gitem a nestane se vám ze ztratíte přehled kde máte co nasazené nebo ze vynecháte nějaký důležitý krok. Ansible vám pomůže nasazovat aplikace a spravovat servery rychleji a bezpečněji.
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Jak školení probíhá
Školení probíhá formou workshopu, vše si prakticky vyzkoušíme a osaháme. Ansible si společně nainstalujeme a popíšeme si jak pracuje a základní koncepty. Zkusíme si nastavit server (testovací na DigitalOceanu) a nasadit aplikaci od začátku až do konce. Od instalace systémových balíčku, přes stažení aplikace z Gitu, po vytvoření šablon konfiguračních skriptu a nastavení secrets (například hesel). Po absolvování kurzu budete schopni používat Ansible na denní bázi a zjednodušit si nasazovací a konfigurační rutiny.
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Co Vás naučím
- Základní koncept Ansible
- Instalace Ansible (pro ty kteří nenainstalovali doma)
- Základní ovládání Ansible
- Playbooks
- Moduly
- Šablony
- Secrets
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Pro koho je školení určeno
Školení je převážně určeno adminum a DevOps, kteří chtějí začít Ansible používat. Zároveň je vhodné i pro vývojáře, kteří občas nasazují (i do testovacích prostředí) svoje aplikace a chtějí zjednodušit tento proces.
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
- Nainstalovaný Ansible, [návod na instalaci](https://www.ondrej-sika.cz/ansible/instalace/)
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
Jmenuji se Ondřej Šika, vyvíjím software pro Slush Pool a školím. Všechny kurzy vědu osobně. Ansible používám jako nástroj na správu serverů i osobních počítačů (těch s Linuxem, dříve jsem používal Puppet ale přešel jsem na Ansible). Krom toho se snažím Ansible používat na správu úplně všeho, od uživatelů v databázích po DNS záznamy na Cloudflare.
        `}
        />
      </TextFrameWithImage>

      <MyClients lang={site.lang} />
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
Pokud máte zájem o školení, neváhejte mě kontaktovat - [Nezávazně poptat školení](https://ondrej-sika.cz/ansible/poptavka/)
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Cena
Pokud máte zájem o školení u vás ve firmě, [nezávazně jej poptejte](https://ondrej-sika.cz/ansible/poptavka/) nebo mi napište email na <ondrej@sika.io>

Otevřený termín (self funded): 9 999 CZK bez DPH<br>
Otevřený termín (company funded): 14 999 CZK bez DPH<br>
Firemní školení (ve firmě): 40 000 CZK bez DPH<br>
`}
        />
      </TextFrame>
      <Contact />
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
