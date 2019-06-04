import '@app/ondrej-sika.cz/css'

import ReactMarkdown from 'react-markdown'
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

const H3 = (props) => (
  <h3 className='pt-4 pb-2'>{props.children}</h3>
)

const Index = () => (
  <div>
    <Head>
      <title>Školení Ansible - Ondrej Sika</title>
    </Head>
    <Header
      websiteHeader='Školení Ansible'
      inquiryBtn='Nezávazně poptat školení'
      logo='/static/ansible.png'>
    </Header>
    <div className='container course-page'>
    <ReactMarkdown source={`
### K čemu se používá?

Ansible je nástroj na hromadnou správu konfiguraci a nasazování. Vy deklarujete vysledný stav serveru a služeb a Ansible se postará o provedení. Nemusíte řešit v jakém stavu je server nebo aplikace ted, Ansible vám zařídí požadovaný výsedek (výhoda deklarativní syntaxe, napřiklad shell script je imperativní - proveď to a to ...). Veškerou konfiguraci máte verzovanou Gitem a nestane se vám ze ztratíte přehled kde máte co nasazené nebo ze vynecháte nějaký důležitý krok. Ansible vám pomůže nasazovat aplikace a spravovat servery rychleji a bezpečněji.

### Jak školení probíhá

Ansible si společně nainstalujeme a popíšeme si jak pracuje a základní koncepty. Zkusíme si nastavit server (testovací na DigitalOceanu) a nasadit aplikaci od začátku až do konce. Vše si prakticky ošaháme a ozkoušíme.

### Co Vás naučím

- Základní koncept Ansible
- Instalace Ansible (pro ty kteří nenainstalovali doma)
- Základní ovládání Ansible
- Playbooks
- Moduly
- Šablony
- Secrets

### Pro koho je školení určeno

Školení je převážně určeno adminum a DevOps, kteří chtějí začít Ansible používat. Zároveň je vhodné i pro vývojáře, kteří občas nasazují (i do testovacích prostředí) svoje aplikace a chtějí zjednodušit tento proces.
`}/>

  <TwoCol
    col1={
      <ReactMarkdown source={`
#### Předchozí znalosti

- Základy práce s Linuxemm
- Základy práce v terminálu
      `} escapeHtml={false}/>
    }
    col2={
      <ReactMarkdown source={`
#### Technické požadavky

- Nainstalovaný Ansible
- Přístup na internet (ideálně bez korporatni proxy, případně nastavenou proxy v Dockeru)
      `} escapeHtml={false}/>
    }
  />

  </div>
    <References ids={['oxy','oxyCTO']} lang={site.lang} />
    <Price
      PriceHeader='Cena za školení'
      PriceBtn='Nezávazně poptat školení'>
      Otevřený termín (self funded): 9 999 CZK bez DPH<br/>
      Otevřený termín (company funded): 14 999 CZK bez DPH<br/>
      Firemní školení (ve firmě): 36 000 CZK bez DPH
    </Price>
    <div className='container'>
      <TextArea
        TextHeader='Poptávka firemního školení Ansible'
        TextParagraph='Pole označené * jsou povinné.'>
        <Form
          course='ansible'
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
