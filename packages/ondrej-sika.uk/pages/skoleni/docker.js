import Markdown from "@app/common/components/Markdown";
import Header from '@app/ondrej-sika.cz/components/Header'
import TextArea from '@app/ondrej-sika.cz/components/TextArea';
import TwoCol from '@app/ondrej-sika.cz/components/TwoCol';
import References from '@app/ondrej-sika.cz/components/References';
import Price from '@app/ondrej-sika.cz/components/Price';
import Form from '@app/ondrej-sika.cz/components/Form';

import Head from 'next/head'


let site = {
  lang: 'cs'
}

const Index = () => (
  <div>
    <Head>
    </Head>
    <Header
      websiteHeader='Školení Docker'
      inquiryBtn='Nezávazně poptat školení'
      logo='/static/docker.svg'>
    </Header>
    <div className='container course-page'>
      <Markdown source={`
### K čemu se používá?
Docker je dnes technologie, která proces vývoje, testování a provozování softwaru velmi zjednodušuje. Provozujte cokoliv a kdekoliv. Už nečekejte na nastavení vašeho serveru nebo na aktualizaci nějaké knihovny. Mějte prostředí jako součást vaší aplikace.
### Jak školení probíhá
Na školení si formou workshopu ukážeme vše jak s Dockerem pracovat, od vytvoření vlastního kontejnerů, po jeho provozování ve Swarmu. Vše si prakticky vyzkoušíme a osaháme.
### Co Vás naučím
- Teoretický úvod do Dockeru
- Instalace Dockeru (pro ty kteří nenainstalovali doma)
- Práce s kontejnery
- Práce s obrazy
- Docker Compose – vícekontejnerové aplikace v Dockeru
- Deployment do Swarmu
- Ukázka deploymentu do Kubernetes
### Pro koho je školení určeno
Školení je primárně určeno lidem, kteří nemají s Dockerem žádné (nebo malé) zkušenosti. Školení nepočítá s předchozími znalostmi Dockeru. Je vhodné pro vývojáře nebo devops (server administrátory), kteří chtějí Docker využívat v praxi nebo chtějí mít přehled co Docker řeší a kde by jej mohli použít.`}/>
      <TwoCol
        col1={
          <Markdown source={`
#### Předchozí znalosti
- Základy práce s Linuxemm
- Základy práce v terminálu
          `}/>
        }
        col2={
          <Markdown source={`
#### Technické požadavky
- Nainstalovány Docker
- Přístup na internet (ideálně bez korporatni proxy, případně nastavenou proxy v Dockeru)
          `}/>
        }
      />
    </div>
    <References ids={[ 'sit', 'vse']} lang={site.lang} />
    <Price
      PriceHeader='Cena za školení'
      PriceBtn='Nezávazně poptat školení'>
      Otevřený termín (self funded): 9 999 CZK bez DPH<br/>
      Otevřený termín (company funded): 14 999 CZK bez DPH<br/>
      Firemní školení (ve firmě): 40 000 CZK bez DPH
    </Price>
    <div className='container'>
      <TextArea
        TextHeader='Poptávka firemního školení Dockeru'
        TextParagraph='Pole označené * jsou povinné.'>
        <Form
          course='Docker'
          FormName='Jméno *'
          FromNamePlaceholder='Anton Hrabiš'
          FormCompany='Společnost'
          FormCompanyPlaceholder='Drůbežárny'
          FormEmail='Email *'
          FormEmailPlaceholder='anton@hrabis.cz'
          FormPhone='Telefon *'
          FormPhonePlaceholder='+420111222333'
          FormSent='Odeslat'
        />
      </TextArea>
    </div>
  </div>
)

export default Index
