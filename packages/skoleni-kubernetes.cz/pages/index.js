import '../css'

import FooterOndrejSika from 'course-landing/components/FooterOndrejSika';
import Header from 'course-landing/components/Header';
import HeaderLink from 'course-landing/components/HeaderLink';
import TextFrame from 'course-landing/components/TextFrame';
import TextFrameWithImage from 'course-landing/components/TextFrameWithImage';
import MyClients from 'course-landing/components/MyClients';
import References from 'course-landing/components/References';
import ThreeCol from 'course-landing/components/ThreeCol';
import someone from 'course-landing/components/References/someone.jpg'
import jurajhantak from 'course-landing/components/References/jurajhantak.jpg'
import martinkylian from 'course-landing/components/References/martinkylian.jpg'
import TwoCol from 'course-landing/components/TwoCol';
import Navigation from 'course-landing/components/Navigation';
import ButtonOutline from 'course-landing/components/ButtonOutline';
import Contact from 'course-landing/components/Contact'
import Head from 'next/head'

const Index = () => (
  <div>
    <Head>
        <title>Školení Kuberneres, Ondrej Sika - skoleni-kubernetes.cz</title>
    </Head>
    <Navigation/>
    <Header
      websiteHeader="Školení Kubernetes"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=skoleni-kubernetes.cz"
      logoUrl="/static/kubernetes.png"
    >
      <HeaderLink url="https://ondrej-sika.cz/skoleni/kubernetes/poptavka/?x_source=skoleni-kubernetes.cz">Nezávazně poptat školení</HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skoleni-kubernetes.cz">Kontaktovat</HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame header="Popis technologie">
        Kubernetes jsou dnes nejrozšířenější platformou na hostování Docker kontejnerů a jsou podporovány velkými hráči na trhu (Google, Amazon, Microsoft) skrz Cloud Native Computing Foundation. Kuberneres pro provoz používají všechny velikosti firem, od startupu po korporace.
      </TextFrame>
      <TextFrame header="Jak školení probíhá">
        Školeni probíhá formou workshopů, vše si prakticky vyzkoušíme a osaháme. Ukážeme jak spustit Kuberneres lokálně (pro vývoj) a na cloudové platformě Digital Ocean. Dozvíme se základní strukturu Kubernetes a projdeme si jeho komponenty. Naučíme se jak napsat Kubernetes manifest a jak jim nasadit aplikaci v Dockeru. Dále si ukážeme jak pracovat s právama v Kubernetes a jak používat (a psát) Kubernetes balíčky v Helmu.
      </TextFrame>
      <TextFrame header="Co Vás naučím">
        <ul>
          <li>Teoretický úvod do Kubernetes</li>
          <li>Instalace Minikube a kubectl (pro ty kteří nenainstalovali doma)</li>
          <li>Popis Kubernetes komponent</li>
          <li>Deployment do Kubernetes</li>
          <li>Práce s právy v Kubernetes clusteru</li>
          <li>Teoretický úvod do Helm balíčku</li>
          <li>Instalace / Deployment pomocí Helmu</li>
          <li>Psaní vlastního Helm balíčku</li>
        </ul>
      </TextFrame>
      <TextFrame header="Pro koho je školení určeno">
        Školení je určeno pro lidi (vývojáři a devops), kteří mají zájem provozovat své Docker aplikace v Kuberneres.
        <TwoCol
          col1={
            <>
              <h4>Předchozí znalosti</h4>
              <ul>
                <li>Základy práce s Dockerem</li>
                <li>Základy práce s Linuxem</li>
                <li>Základy práce v terminálu</li>
              </ul>
            </>
          }
          col2={
            <>
              <h4>Technické požadavky</h4>
              <ul>
                <li>Nainstalovaný Kubernetes, návod na instalaci: <a href="https://www.ondrej-sika.cz/kubernetes/instalace/">ondrej-sika.cz/kubernetes/instalace/</a></li>
                <li>Přístup na internet - ideálně bez korporátní proxy, případně nastavenou proxy v prohlížeči</li>
              </ul>
            </>
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Lektor: Ondřej Šika"
        imgUrl="/static/ondrejsika.jpg" >
        Jmenuji se Ondřej Šika, vyvíjím software pro Slush Pool a školím. Kubernetes jsem školil ve firmách jako je CGI nebo Webglobe - Yegon. Školím převážně Docker, který s Kubernetes velmi úzce souvisí. Další školení naleznete na mém webu ondrej-sika.cz.
        <br /><br />
        Všechny kurzy vedu osobně. Kubernetes používám jako platformu pro většinu svých projektů a je to jeden z nejjednodušších způsobů jak provozovat Docker kontejnery.
      </TextFrameWithImage>

      <MyClients HeaderClients="Moji nejvýznamější klienti"/>

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
            imgRefer={jurajhantak}
            nameRefer="Juraj Hanták"
            position="Webglobe - Yegon"
            reference="Ondrej u nás strávil tri dni a počas tejto doby nás uviedol do problematiky dockeru. Následne sme si prešli kubernetes od inštalácie až po prevádzku aplikácií. Školenie naplnilo naše očakávania."
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

      <TextFrame header="Mám zájem o školení"
        ApplicationBtn="nezávazně poptat školení Dockeru"
        ApplicationBtnUrl="https://ondrej-sika.cz/skoleni/docker/poptavka/?x_source=skoleni-docker.cz"
        >
        Pokud máte zájem o školení, neváhejte mě kontaktovat
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
    <FooterOndrejSika />
  </div>
)

export default Index
