import '../css'

import Footer from 'course-landing/components/Footer'
import Alert from 'archetype-theme/components/Alert'
import Person from 'archetype-theme/components/Person'
import Header from 'course-landing/components/Header'
import HeaderLink from 'course-landing/components/HeaderLink'
import TextFrame from 'course-landing/components/TextFrame';
import TextFrameWithImage from 'course-landing/components/TextFrameWithImage';

const Index = () => (
  <div>
    <Header
      websiteHeader="Školení Kubernetes"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=skoleni-docker.cz"
      logoUrl="/static/kubernetes.png"
    >
      <HeaderLink url="https://ondrej-sika.cz/skoleni/kubernetes/poptavka/?x_source=skoleni-docker.cz">Nezávazně poptat školení</HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skoleni-docker.cz">Kontaktovat</HeaderLink>
    </Header>
    <div className="container">
      <TextFrame header="Co je to Docker">
        Docker je dnes technologie, která proces vývoje, testování a provozování softwaru velmi zjednodušuje. Provozujte cokoliv a kdekoliv. Už nečekejte na nastavení vašeho serveru nebo na aktualizaci nějaké knihovny. Mějte prostředí jako součást vaší aplikace.
      </TextFrame>
      <TextFrameWithImage
        header="Lektor: Ondřej Šika"
        imgUrl="/static/ondrejsika.jpg"
      >
        Jmenuji se Ondřej Sika, vyvíjím software pro Slush Pool a školím. Školím převážně Docker a CI, který s Dockerem velmi úzce souvisí. Další školení naleznete na mém webu ondrej-sika.cz.
       <br />
        Všechny kurzy vedu osobně. S Dockerem mám více než čtyři roky zkušeností v rámci komerčního vývoje softwaru. Docker používám denně jak ve vývoji, tak i na produkci a práci bez něj nedovedu už ani představit.
      </TextFrameWithImage>
      <Alert>Hello</Alert>
      <Person
        name='Ondrej Sika'
        imgSrc='https://ondrejsika.com/ondrej/photo/ondrejsika3_200px.jpg'
        bio='Hacker from Prague'
      />
      <Footer />
    </div>
  </div>
)

export default Index
