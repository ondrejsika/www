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
      websiteHeader="Školení Gitlab CI"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=skoleni-gitlab-ci.cz"
      logoUrl="/static/gitlab-ci.svg"
    >
      <HeaderLink url="https://ondrej-sika.cz/skoleni/gitlab-ci/poptavka/?x_source=skoleni-gitlab-ci.cz">Nezávazně poptat školení</HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skoleni-gitlab-ci.cz">Kontaktovat</HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame header="Popis technologie">
        Continuous Integration (zkráceně CI nebo CI/CD) je nástroj, který za Vás automatizuje rutijni úkoly jako je pouštění testů, kvality kódu a nebo nasazování. Umožní vám rychleji začleňovat změny do masteru a rychleji nasazovat. Výhodou Gitlab CI je velmi dobrá podpora Dockeru, můžete velmi jednoduše skládat Docker images a nebo pouštět testy v kontejnerech.
      </TextFrame>
      <TextFrame header="Jak školení probíhá">
        Na školení formou workshopu si vysvětlíme proč je dobré CI používat, ukážeme si možnosti Gitlab CI a vyzkoušíme si napsat CI skript pro ukázkový projekt. Výsledkem bude CI skript pro jednoduchý projekt obsahující joby od buildu aplikace, přez testy až po deployment.
      </TextFrame>
      <TextFrame header="Co Vás naučím">
      <ReactMarkdown source={`
- Obecný úvod do CI
- Úvoď do Gitlab CI
- Instalace Gitlab CI Runneru
- Práce s CI joby
- Tvorba CI pipelines
- Automatické nasazování
- Docker a CI
        `} escapeHtml={false}/>
      </TextFrame>
      <TextFrame header="Pro koho je školení určeno">
        Školení je primárně určeno vývojářům kteří používají Gitlab a chtějí začít používat Gitlab CI. Zároveň právě Gitlab CI může být důvod přechodu na Gitlab. Školení je také vhodné pro DevOps, kteří si chtějí ulehčit práci s automatizací nasazování.
        <TwoCol
          col1={
            <>
              <h4>Předchozí znalosti</h4>
              <ReactMarkdown source={`
- Základy práce s Linuxem
- Základy práce v terminálu
- Základní znalost Gitu výhodou - [Školení Git](https://ondrej-sika.cz/skoleni/git/)
              `} escapeHtml={false}/>
            </>
          }
          col2={
            <>
              <h4>Technické požadavky</h4>
              <ReactMarkdown source={`
- Přístup na internet - ideálně bez korporátní proxy, případně nastavenou proxy v prohlížeči</li>
              `} escapeHtml={false}/>
            </>
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Lektor: Ondřej Šika"
        imgUrl="/static/ondrejsika.jpg"
        >
        Jmenuji se Ondřej Sika, vyvíjím software pro Slush Pool a školím. Školím převážně Docker a CI, který s Dockerem velmi úzce souvisí. Další školení naleznete na mém webu <a href="https://ondrej-sika.cz">ondrej-sika.cz</a>.
       <br /><br />
        Všechny kurzy vedu osobně. S Gitlab CI mám zkušenosti z mnoha různých projektů a firem. Téměř všechny projekty na kterých pracuji využívají Gitlab CI. Gitlab CI mi velmi ulehčuje a zrychluje práci - nemusím se starat o rutijni akce jako nasazování nebo build aplikace a mohu se věnovat vývoji a činnostem které mi přinášejí zisk.
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
          btnUrl='https://ondrej-sika.cz/skoleni/gitlab-ci/poptavka/'>
          Nezávazně poptat školení
        </ButtonOutline>
      </TextFrame>

      <TextFrame header="Cena">
        Pokud máte zájem o školení u vás ve firmě, <a href="https://ondrej-sika.cz/skoleni/gitlab-ci/poptavka/" className="btn btn-large mybutton-outline">nezávazně jej poptejte</a> nebo mi napište email na <a href="mailto:ondrej@ondrejsika.com">
        </a>
        <br/>
        Otevřený termín (self funded): 4 999 CZK bez DPH<br />
        Otevřený termín (company funded): 6 999 CZK bez DPH<br />
        Firemní školení (ve firmě): 18 000 CZK bez DPH
      </TextFrame>
      <Contact />
    </div>
    <Footer />
  </div>
)

export default Index
