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
      <title>Školení Gitlab CI - Ondrej Sika</title>
    </Head>
    <Header
      websiteHeader='Školení Gitlab CI'
      inquiryBtn='Nezávazně poptat školení'
      logo='/static/gitlab-ci.svg'>
    </Header>
    <div className='container course-page'>
    <Markdown source={`
### K čemu se používá ?
Continuous Integration (zkráceně CI nebo CI/CD) je nástroj, který za Vás automatizuje rutijni úkoly jako je pouštění testů, kvality kódu a nebo nasazování. Umožní vám rychleji začleňovat změny do masteru a rychleji nasazovat. Výhodou Gitlab CI je velmi dobrá podpora Dockeru, můžete velmi jednoduše skládat Docker images a nebo pouštět testy v kontejnerech.
### Jak školení probíhá
Na školení formou workshopu si vysvětlíme proč je dobré CI používat, ukážeme si možnosti Gitlab CI a vyzkoušíme si napsat CI skript pro ukázkový projekt. Výsledkem bude CI skript pro jednoduchý projekt obsahující joby od buildu aplikace, přez testy až po deployment.
### Co Vás naučím
- Obecný úvod do CI
- Úvod do Gitlab CI
- Instalace Gitlab CI Runneru
- Práce s CI joby
- Tvorba CI pipelines
- Automatické nasazování
- Docker a CI
### Pro koho je školení určeno
Školení je primárně určeno vývojářům kteří používají Gitlab a chtějí začít používat Gitlab CI. Zároveň právě Gitlab CI může být důvod přechodu na Gitlab. Školení je také vhodné pro DevOps, kteří si chtějí ulehčit práci s automatizací nasazování.`}/>
      <TwoCol
        col1={
          <Markdown source={`
#### Předchozí znalosti
- Základy práce s Linuxem
- Základy práce v terminálu
- Základní znalost Gitu výhodou - [Školení Git](/skoleni/git)
          `}/>
        }
        col2={
          <Markdown source={`
#### Technické požadavky
- Přístup na internet (ideálně bez korporatni proxy, případně nastavenou proxy v Dockeru)
          `}/>
        }
      />
    </div>
    <References ids={['CMS', 'vse']} lang={site.lang} />
    <Price
      PriceHeader='Cena za školení'
      PriceBtn='Nezávazně poptat školení'>
      Otevřený termín (self funded): 4 999 CZK bez DPH<br/>
      Otevřený termín (company funded): 6 999 CZK bez DPH<br/>
      Firemní školení (ve firmě): 18 000 CZK bez DPH
    </Price>
    <div className='container'>
      <TextArea
        TextHeader='Poptávka firemního školeni Gitlabu CI'
        TextParagraph='Pole označené * jsou povinné.'>
        <Form
          course='Gitlab CI'
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
