import '../css'

import ReactMarkdown from 'react-markdown'
import Footer from 'course-landing/components/Footer'
import Header from 'course-landing/components/Header'
import HeaderLink from 'course-landing/components/HeaderLink'
import TextFrame from 'course-landing/components/TextFrame';
import TextFrameWithImage from 'course-landing/components/TextFrameWithImage';
import MyClients from 'course-landing/components/MyClients';
import References from 'course-landing/components/References';
import ThreeCol from 'course-landing/components/ThreeCol';
import someone from 'course-landing/components/References/someone.jpg'
import jurajboldis from 'course-landing/components/References/jurajboldis.jpg'
import martinkylian from 'course-landing/components/References/martinkylian.jpg'
import TwoCol from 'course-landing/components/TwoCol';
import Navigation from 'course-landing/components/Navigation';
import ButtonOutline from 'course-landing/components/ButtonOutline';
import Recommendation from 'course-landing/components/Recommendation'
import Contact from 'course-landing/components/Contact'

let site = {
  lang: 'cs'
}

const Index = () => (
  <div>
    <Navigation/>
    <Header
      websiteHeader="Školení Ansible"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=ansible-skoleni.cz"
      logoUrl="/static/ansible.png"
    >
      <HeaderLink url="https://ondrej-sika.cz/skoleni/ansible/poptavka/?x_source=ansible-skoleni.cz">Nezávazně poptat školení</HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=ansible-skoleni.cz">Kontaktovat</HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame header="Popis technologie">
        Ansible je nástroj na hromadnou správu konfiguraci a nasazování. Vy deklarujete vysledný stav serveru a služeb a Ansible se postará o provedení. Nemusíte řešit v jakém stavu je server nebo aplikace ted, Ansible vám zařídí požadovaný výsedek (výhoda deklarativní syntaxe, napřiklad shell script je imperativní - proveď to a to ...). Veškerou konfiguraci máte verzovanou Gitem a nestane se vám ze ztratíte přehled kde máte co nasazené nebo ze vynecháte nějaký důležitý krok. Ansible vám pomůže nasazovat aplikace a spravovat servery rychleji a bezpečněji.
      </TextFrame>
      <TextFrame header="Jak školení probíhá">
        Školení probíhá formou workshopu, vše si prakticky vyzkoušíme a osaháme. Ansible si společně nainstalujeme a popíšeme si jak pracuje a základní koncepty. Zkusíme si nastavit server (testovací na DigitalOceanu) a nasadit aplikaci od začátku až do konce. Od instalace systémových balíčku, prez stažení aplikace z Gitu, po vytvoření šablon konfiguračních skriptu a nastavení secrets (například hesel). Po absolvování kurzu budete schopni používat Ansible na denní bázi a zjednodušit si nasazovací a konfigurační rutiny.
      </TextFrame>
      <TextFrame header="Co Vás naučím">
        <ReactMarkdown source={`
- Základní koncept Ansible
- Instalace Ansible (pro ty kteří nenainstalovali doma)
- Základní ovládání Ansible
- Playbooks
- Moduly
- Šablony
- Secrets
        `} escapeHtml={false}/>
      </TextFrame>
      <TextFrame header="Pro koho je školení určeno">
        Školení je převážně určeno adminum a DevOps, kteří chtějí začít Ansible používat. Zároveň je vhodné i pro vývojáře, kteří občas nasazují (i do testovacích prostředí) svoje aplikace a chtějí zjednodušit tento proces.
        <TwoCol
          col1={
            <>
              <h4>Předchozí znalosti</h4>
              <ReactMarkdown source={`
- Základy práce s Linuxem
- Základy práce v terminálu
              `} escapeHtml={false}/>
            </>
          }
          col2={
            <>
              <h4>Technické požadavky</h4>
              <ReactMarkdown source={`
- Nainstalovaný Ansible, <a href="https://www.ondrej-sika.cz/skoleni/ansible/instalace/">návod na instalaci</a>
- Přístup na internet - ideálně bez korporátní proxy, případně nastavenou proxy v prohlížeči
              `} escapeHtml={false}/>
            </>
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Lektor: Ondřej Šika"
        imgUrl="/static/ondrejsika.jpg"
        >
        Jmenují se Ondřej Šika, vyvíjím software pro Slush Pool a školím. Všechny kurzy vědu osobně. Ansible používám jako nástroj na správu serverů i osobních počítačů (těch s Linuxem, dříve jsem používal Puppet ale přešel jsem na Ansible). Krom toho se snažím Ansible používat na správu úplně všeho, od uživatelů v databázích po DNS záznamy na Cloudflare.
      </TextFrameWithImage>

      <MyClients HeaderClients="Moji nejvýznamější klienti"/>

      <ThreeCol header="Reference"
        col1={
          <Recommendation id="vse" lang={site.lang}/>
        }
        col2={
          <References
            imgRefer={jurajboldis}
            nameRefer="Juraj Boldiš"
            position="CIO @ Bohemia Energy"
            reference="I consulted with Ondrej topics including Blockchain, GIT and development standards. I appreciate Ondrej's knowledge and experience in these areas. Ondrej is open minded person and discussions with him I found very fruitful"/>
        }
        col3={
          <References
            imgRefer={martinkylian}
            nameRefer="Martin Kylián"
            position="Network Security Engineer, SIT of city Pilsen"
            reference="Ondrej trained our team in using Git and using the Docker. The course was excellent. Ondrej'sknowledge of devops is great. I highly recommend his courses. They have pushed us forward to automate daily processes."
          />
        }
      />

      <TextFrame header="Mám zájem o školení">
        Pokud máte zájem o školení, neváhejte mě kontaktovat
        <ButtonOutline
          btnUrl='https://ondrej-sika.cz/skoleni/ansible/poptavka/'>
          Nezávazně poptat školení
        </ButtonOutline>
      </TextFrame>

      <TextFrame header="Cena">
        Pokud máte zájem o školení u vás ve firmě, <a href="https://ondrej-sika.cz/skoleni/ansible/poptavka/" className="btn btn-large mybutton-outline">nezávazně jej poptejte</a> nebo mi napište email na <a href="mailto:ondrej@ondrejsika.com">ondrej@ondrejsika.com</a>
        <br/>
        Otevřený termín (self funded): 9 999 CZK bez DPH<br />
        Otevřený termín (company funded): 14 999 CZK bez DPH<br />
        Firemní školení (ve firmě): 36 000 CZK bez DPH
      </TextFrame>
      <Contact />
    </div>
    <Footer />
  </div>
)

export default Index
