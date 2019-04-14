import '../css'

import Footer from 'course-landing/components/Footer'
import Alert from 'archetype-theme/components/Alert'
import Person from 'archetype-theme/components/Person'
import Header from 'course-landing/components/Header'
import HeaderLink from 'course-landing/components/HeaderLink'

const Index = () => (
  <div>
    <Header
      websiteHeader="Školení Dockeru"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.cz/?x_source=skoleni-docker.cz"
      logoUrl="/static/docker.png"
    >
      <HeaderLink url="https://ondrej-sika.cz/skoleni/docker/poptavka/?x_source=skoleni-docker.cz">Nezávazně poptat školení</HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skoleni-docker.cz">Kontaktovat</HeaderLink>
    </Header>
    <div className="container">
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
