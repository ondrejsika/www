import 'archetype-theme/css'
import Footer from 'archetype-theme/components/Footer'
import Alert from 'archetype-theme/components/Alert'
import Person from 'archetype-theme/components/Person'

const Index = () => (
  <div>
    <h1>Ondrej Sika Webs / Archetype</h1>
    <Alert>Hello</Alert>
    <Person
      name='Ondrej Sika'
      imgSrc='https://ondrejsika.com/ondrej/photo/ondrejsika3_200px.jpg'
      bio='Hacker from Prague'
    />
    <Footer />
  </div>
)

export default Index
