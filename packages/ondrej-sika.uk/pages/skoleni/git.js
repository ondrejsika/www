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
      websiteHeader='Školení Git'
      inquiryBtn='Nezávazně poptat školení'
      logo='/static/git.svg'>
    </Header>
    <div className='container course-page'>
      <Markdown source={`
### Co je to Git
Git je moderní verzovaci nástroj, který se stal defaco standatem mezi vývojáři. Git vám nabízí jednoduchou kolaboraci na projektu s více lidmi a práci na více částech současně, aniž by jste si zasahovali do rozdělaných projektů nebo je jinak narušovali. Spolupráci na vývoji projektu dále zlepšuje Gitlab, což je kolaborativni platforma na návrh, vývoj a provozování software.
### Jak školení probíhá
Na školení formou workshopu si vysvětlíme proč je dobré Git používat, jak funguje (proč dnes nemá konkurenty) a best practise.
### Co Vás naučím
- Instalace a konfigurace GITu
- Vytvořit nový repozitář
- Základní ovládání GITu
- Práce v jedné větvi
- Práce ve větvích - merge, rebase (silná stránka Gitu)
- Práce se vzdálenými repozitáři
- Záchrana smazaných dat z repozitáře
### Pro koho je školení určeno
Školení je určeno primárně pro vývojáře, kteří neverzují vůbec nebo nepoužívají Git. Zároveň je vhodné i pro ty, kteří Git nevyužívají na 100% (git commit, git pull, git push). Ať jde o malé weby nebo velké projekty, Git si najde uplatnění. Dále je kurz vhodný i pro ty, kteří nepíšou kód tak často, ale občas potřebují něco zaverzovat, například nějaké migrační skripty DB a nebo konfiguraci serveru. Git pomůže i DBA nebo DevOps.`}/>
      <TwoCol
        col1={
          <Markdown source={`
#### Předchozí znalosti
- Základy práce s Linuxemm
- Základy práce v terminálu
- Základní znalost Gitu výhodou
          `}/>
        }
        col2={
          <Markdown source={`
#### Technické požadavky
- Nainstalovaný Git
- Přístup na internet - ideálně bez korporátní proxy, případně nastavenou proxy v prohlížeči
          `}/>
        }
      />
    </div>
    <References ids={['vistag', 'oxyCTO']} lang={site.lang} />
    <Price
      PriceHeader='Cena za školení'
      PriceBtn='Nezávazně poptat školení'>
      Otevřený termín (self funded): 4 999 CZK bez DPH<br/>
      Otevřený termín (company funded): 6 999 CZK bez DPH<br/>
      Firemní školení (ve firmě): 20 000 CZK bez DPH
    </Price>
    <div className='container'>
      <TextArea
        TextHeader='Poptávka firemního školeni Gitu'
        TextParagraph='Pole označené * jsou povinné.'>
        <Form
          course='Git'
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
