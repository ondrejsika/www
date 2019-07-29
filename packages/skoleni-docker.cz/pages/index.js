import Header from '@app/course-landing/components/Header';
import HeaderLink from '@app/course-landing/components/HeaderLink';
import TextFrame from '@app/course-landing/components/TextFrame';
import TextFrameWithImage from '@app/course-landing/components/TextFrameWithImage';
import MyClients from '@app/course-landing/components/MyClients';
import ThreeCol from '@app/course-landing/components/ThreeCol';
import TwoCol from '@app/course-landing/components/TwoCol';
import Navigation from '@app/course-landing/components/Navigation';
import Recommendation from '@app/course-landing/components/Recommendation';
import Contact from '@app/course-landing/components/Contact';
import FooterOndrejSika from '@app/course-landing/components/FooterOndrejSika';
import Head from 'next/head';
import Markdown from "@app/common/components/Markdown";
import site from '@app/skoleni-docker.cz/config';
import UpcomingSessions from '@app/course-landing/components/UpcomingSessions'
import TwitterRecommendations from '@app/course-landing/components/TwitterRecommendations';


const Index = () => (
  <div>
    <Head>
        <title>Školení Docker, Ondrej Sika - skoleni-docker.cz</title>
    </Head>
    <Navigation location={site.location}/>
    <Header
      websiteHeader="Školení Dockeru"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=skoleni-docker.cz"
      logoUrl="/static/docker-w.svg"
    >
      <HeaderLink url="https://ondrej-sika.cz/skoleni/docker/poptavka/?x_source=skoleni-docker.cz">Nezávazně poptat školení</HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skoleni-docker.cz">Kontaktovat</HeaderLink>
    </Header>
    <div className="container container-width">
      {/* <UpcomingSessions lang={site.lang}/> */}
    <TextFrame>
        <Markdown source={`
### Co je to Docker
Docker je dnes technologie, která proces vývoje, testování a provozování softwaru velmi zjednodušuje. Provozujte cokoliv a kdekoliv. Už nečekejte na nastavení vašeho serveru nebo na aktualizaci nějaké knihovny. Mějte prostředí jako součást vaší aplikace.
`}/>
      </TextFrame>
      <TextFrame>
        <Markdown source={`
### Jak školení probíhá

Na školení Úvod do práce s Dockerem si ukážeme vše jak s Dockerem pracovat od vytvoření vlastního kontejnerů po jeho provozování ve Swarmu. Vše si prakticky vyzkoušíme a osaháme.
`}/>
      </TextFrame>
      <TextFrame header="">
        <Markdown source={`
### Co Vás naučím

- Teoretický úvod do Dockeru
- Instalace Dockeru (pro ty kteří nenainstalovali doma)
- Práce s kontejnery
- Práce s obrazy
- Docker Compose - vicekontejnerove aplikace v Dockeru
- Deployment do Swarmu
- Ukázka deploymentu do Kubernetes
`}/>
      </TextFrame>
      <TextFrame header="">
        <Markdown source={`
### Pro koho je školení určeno

Školení je primárně určeno lidem, kteří nemají s Dockerem žádné (nebo malé) zkušenosti. Školení nepočítá s předchozími znalostmi Dockeru. Je vhodné pro vývojáře nebo devops (server administrátory), kteří chtějí Docker využívat v praxi nebo chtějí mít přehled co Docker řeší a kde by jej mohli použít.
`}/>
        <TwoCol
          col1={
            <Markdown source={`
#### Předchozí znalosti

- Základy práce s Linuxem
- Základy práce v terminálu
`}/>
          }
          col2={
            <Markdown source={`
#### Technické požadavky

- Nainstalovaný Docker, [návod na instalaci](https://www.ondrej-sika.cz/docker/instalace/)
- Přístup na internet - ideálně bez korporátní proxy, případně nastavenou proxy v prohlížeči
`}/>
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Lektor: Ondřej Šika"
        imgUrl="/static/ondrejsika.jpg"
        >
          <Markdown source={`
Jmenuji se Ondřej Sika, vyvíjím software pro Slush Pool a školím. Školím převážně Docker a CI, který s Dockerem velmi úzce souvisí. Další školení naleznete na mém webu ondrej-sika.cz.

Všechny kurzy vedu osobně. S Dockerem mám více než čtyři roky zkušeností v rámci komerčního vývoje softwaru. Docker používám denně jak ve vývoji, tak i na produkci a práci bez něj nedovedu už ani představit.
`}/>
      </TextFrameWithImage>

      <MyClients HeaderClients="Moji nejvýznamější klienti"/>

      <ThreeCol header="Reference"
        col1={
          <Recommendation id="bohemiaenergy" lang={site.lang}/>
        }
        col2={
          <Recommendation id="vse" lang={site.lang}/>
        }
        col3={
          <Recommendation id="sit" lang={site.lang}/>
        }
      />
      <TextFrame>
      <Markdown source={`
### Ohlasy z Twitteru
`}/>
      <TwitterRecommendations rec1="jan-novotny-docker" rec2="tomas-ligenza-docker" />
      </TextFrame>
      <TextFrame>
        <Markdown source={`
### Mám zájem o školení
Pokud máte zájem o školení, neváhejte mě kontaktovat - [Nezávazně poptat školení](https://ondrej-sika.cz/skoleni/docker/poptavka/)
`}/>
      </TextFrame>

      <TextFrame>
        <Markdown source={`
### Cena
Pokud máte zájem o školení u vás ve firmě, [nezávazně jej poptejte](https://ondrej-sika.cz/skoleni/docker/poptavka/) nebo mi napište email na ondrej@ondrejsika.com
- Otevřený termín (self funded): 9 999 CZK bez DPH
- Otevřený termín (company funded): 14 999 CZK bez DPH
- Firemní školení (ve firmě): 36 000 CZK bez DPH
        `}/>
      </TextFrame>
      <Contact />
    </div>
    <FooterOndrejSika />
  </div>
)

export default Index
