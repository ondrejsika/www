import '../css'

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
      byUrl="https://ondrej-sika.cz/?x_source=skoleni-docker.cz"
      logoUrl="/static/docker-w.svg"
    >
      <HeaderLink url="https://ondrej-sika.cz/skoleni/docker/poptavka/?x_source=skoleni-docker.cz">Nezávazně poptat školení</HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skoleni-docker.cz">Kontaktovat</HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame header="Co je to Docker">
        Docker je dnes technologie, která proces vývoje, testování a provozování softwaru velmi zjednodušuje. Provozujte cokoliv a kdekoliv. Už nečekejte na nastavení vašeho serveru nebo na aktualizaci nějaké knihovny. Mějte prostředí jako součást vaší aplikace.
      </TextFrame>
      <TextFrame header="Jak školení probíhá">
        Na školení Úvod do práce s Dockerem si ukážeme vše jak s Dockerem pracovat od vytvoření vlastního kontejnerů po jeho provozování ve Swarmu. Vše si prakticky vyzkoušíme a osaháme.
      </TextFrame>
      <TextFrame header="Co Vás naučím">
        <ul>
          <li>Teoretický úvod do Dockeru</li>
          <li>Instalace Dockeru (pro ty kteří nenainstalovali doma)</li>
          <li>Práce s kontejnery</li>
          <li>Práce s obrazy</li>
          <li>Docker Compose - vicekontejnerove aplikace v Dockeru</li>
          <li>Deployment do Swarmu</li>
          <li>Ukázka deploymentu do Kubernetes</li>
        </ul>
      </TextFrame>
      <TextFrame header="Pro koho je školení určeno">
        Školení je primárně určeno lidem, kteří nemají s Dockerem žádné (nebo malé) zkušenosti. Školení nepočítá s předchozími znalostmi Dockeru. Je vhodné pro vývojáře nebo devops (server administrátory), kteří chtějí Docker využívat v praxi nebo chtějí mít přehled co Docker řeší a kde by jej mohli použít.
        <TwoCol
          col1={
            <>
              <h4>Předchozí znalosti</h4>
              <ul>
                <li>Základy práce s Linuxem</li>
                <li>Základy práce v terminálu</li>
              </ul>
            </>
          }
          col2={
            <>
              <h4>Technické požadavky</h4>
              <ul>
                <li>Nainstalovaný Docker,  <a href="https://www.ondrej-sika.cz/docker/instalace/">návod na instalaci</a></li>
                <li>Přístup na internet - ideálně bez korporátní proxy, případně nastavenou proxy v prohlížeči</li>
              </ul>
            </>
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Lektor: Ondřej Šika"
        imgUrl="/static/ondrejsika.jpg"
        >
        Jmenuji se Ondřej Sika, vyvíjím software pro Slush Pool a školím. Školím převážně Docker a CI, který s Dockerem velmi úzce souvisí. Další školení naleznete na mém webu ondrej-sika.cz.
       <br /><br />
        Všechny kurzy vedu osobně. S Dockerem mám více než čtyři roky zkušeností v rámci komerčního vývoje softwaru. Docker používám denně jak ve vývoji, tak i na produkci a práci bez něj nedovedu už ani představit.
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
          btnUrl='https://ondrej-sika.cz/skoleni/docker/poptavka/'>
          Nezávazně poptat školení
        </ButtonOutline>
      </TextFrame>

      <TextFrame header="Cena">
        Pokud máte zájem o školení u vás ve firmě, <a href="https://ondrej-sika.cz/skoleni/docker/poptavka/" className="btn btn-large mybutton-outline">nezávazně jej poptejte</a> nebo mi napište email na <a href="/cdn-cgi/l/email-protection#8de2e3e9ffe8e7cde2e3e9ffe8e7fee4e6eca3eee2e0">
        <span className="__cf_email__" data-cfemail="2e41404a5c4b446e41404a5c4b445d47454f004d4143">ondrej@ondrejsika.com</span>
        </a>
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
