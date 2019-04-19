import '../css'

import Footer from 'course-landing/components/Footer';
import Header from 'course-landing/components/Header';
import HeaderLink from 'course-landing/components/HeaderLink';
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

const Index = () => (
  <div>
    <Navigation />
    <Header
      websiteHeader="Školení Git"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=skoleni-git.cz"
      logoUrl="/static/git.svg"
    >
      <HeaderLink url="https://ondrej-sika.cz/skoleni/kubernetes/poptavka/?x_source=skoleni-kubernetes.cz">Nezávazně poptat školení</HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skoleni-kubernetes.cz">Kontaktovat</HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame header="Co je to Git?">
        Git je moderní verzovaci nástroj, který se stal defaco standatem mezi vývojáři. Používají jej na denní bazy jednotlivci, startupy i korporace. Git vám nabízí jednoduchou kolaboraci na projektu s více lidmi a práci na více částech současně ani by jste si zasahovali do rozdělaných věcí nebo je jinak narušovali. Spolupráci na vývoji projektu ještě zlepšuje Gitlab, což je kolaborativni platforma na návrh, vývoj a provozování software (více o Gitlabu v samostatném kurzu).
      </TextFrame>
      <TextFrame header="Jak školení probíhá">
        Na školení formou workshopu si vysvětlíme proč je dobré Git používat, jak funguje (proč dnes nemá konkurenty) a best practise. Ukážeme si vše od instalace a základního nastavení Gitu, přez jednoduchou práci na jedné větvi až po práci v teamu a s více větvemi za pomoci různých mergovacich strategii (merge, rebase). Ukážeme si výhody a nevýhody obou z nich a je pak na Vás jak to budete dělat. Také si ukážeme jak se dostat ze špatných situací, jako omylem jsem si všechno smazal a podobně.
      </TextFrame>
      <TextFrame header="Co Vás naučím">
        <ul>
          <li>Instalace a konfigurace GITu</li>
          <li>Vytvořit nový repozitář</li>
          <li>Základní ovládání GITu</li>
          <li>Práce v jedné větvi</li>
          <li>Práce ve větvích - merge, rebase (silná stránka Gitu)</li>
          <li>Práce se vzdálenými repozitáři</li>
          <li>Záchrana smazaných dat z repozitáře</li>
        </ul>
      </TextFrame>
      <TextFrame header="Pro koho je školení určeno">
        Školení je určeno primárně pro vývojáře, kteří neverzují vůbec nebo nepoužívají Git. Zároveň je vhodné i pro ty, kteří Git nevyužívají na 100% (git commit, git pull, git push). Ať jde o malé weby nebo velké projekty, Git si najde uplatnění. Dále je kurz vhodný i pro ty, kteří nepíšou kód tak často, ale občas potřebují něco zaverzovat, například nějaké migrační skripty DB a nebo konfiguraci serveru. Git pomůže i DBA nebo DevOps.<br />
        <TwoCol
          col1={
            <>
              <h4>Předchozí znalosti</h4>
              <ul>
                <li>Základy programování</li>
                <li>Základy práce v terminálu výhodou</li>
                <li>Základní znalost Gitu výhodou</li>
              </ul>
            </>
          }
          col2={
            <>
              <h4>Technické požadavky</h4>
              <ul>
                <li>Nainstalovaný Git</li>
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
        Jmenuji se Ondřej Sika, vyvíjím software pro Slush Pool a školím. Všechny kurzy vedu osobně. S GITem mám více než 7 let zkušeností v rámci komerčního vývoje software. Práci bez Gitu si dnes nedokážu vůbec představit. Kromě zdrojových kódů verzuji konfiguraci, nastavení sertveru, …Problematiku kolem verzování a vývoje software obecně školím více než 3 roky. Git je kurz se, kterým jsem začínal a pořád je populární.
        </TextFrameWithImage>

      <MyClients HeaderClients="Moji nejvýznamější klienti" />
      <ThreeCol header="Reference"
        col1={
          <References
            imgRefer={someone}
            nameRefer="Jan Safka"
            position="Dimension Data"
            reference="Thank you for very good training on Docker. Course was interesting and Ondrej has deep knowledge on this topic. Training was very useful. Looking forward to working with Ondrej again."
          />
        }
        col2={
          <References
            imgRefer={jurajboldis}
            nameRefer="Juraj Boldiš"
            position="CIO @ Bohemia Energy"
            reference="I consulted with Ondrej topics including Blockchain, GIT and development standards. I appreciate Ondrej's knowledge and experience in these areas. Ondrej is open minded person and discussions with him I found very fruitful"
          />
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
          btnUrl='https://ondrej-sika.cz/skoleni/git/poptavka/'>
          Nezávazně poptat školení
        </ButtonOutline>
      </TextFrame>
      <TextFrame header="Cena">
        Pokud máte zájem o školení u vás ve firmě,<ButtonOutline btnUrl='https://ondrej-sika.cz/skoleni/docker/poptavka/'>nezávazně jej poptejte</ButtonOutline> nebo mi napište email na
        <a href='mailto:ondrej@ondrejsika.com'> ondrej@ondrejsika.com</a>

        <br />
        Otevřený termín (self funded): 4 999 CZK bez DPH<br />
        Otevřený termín (company funded): 6 999 CZK bez DPH<br />
        Firemní školení (ve firmě): 18 000 CZK bez DPH
      </TextFrame>

      <ThreeCol
        col1={
          <>
            <h4>Ondřej Sika</h4>
            <p>
              <a href="maitlo:ondrej@ondrejsika.com">ondrej@ondrejsika.com</a>
              <br /><a href="https://ondrej-sika.cz">ondrej-sika.cz</a>
              <br /><a href="tel:+420773452376">+420 773 452 376</a>
            </p>
          </>
        }
        col2={
          <>
          <h4>Fakturační údaje</h4>
          <p>Ondrej Sika<br /><br />
          Klatovská třída 1532/71<br />
          301 00 Plzeň<br />
          Česká Republika<br /><br />
          IC: 88114163<br />
          DIC: CZ9302252102<br />
          </p>
          </>
        }
        col3={
          <>
            <h4>Platební údaje</h4>
            <p>
            CZ(CZK): 2500171198 / 2010<br />
            SK(EUR): 2500171198 / 8330<br /><br />
            IBAN: CZ0620100000002500171198<br />
            BIC code / SWIFT: FIOBCZPPXXX
            </p>
          </>
        }
      />
      <TextFrame header="Navazující kurzy">
        <a href="https://ondrej-sika.cz/skoleni/gitlab-ci">Gitlab CI</a>
      </TextFrame>
    </div>
    <Footer />
  </div>
)

export default Index
