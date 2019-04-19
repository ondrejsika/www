import '../css'
import Footer from 'archetype-theme/components/Footer'
import Alert from 'archetype-theme/components/Alert'
import Person from 'archetype-theme/components/Person'
import ReactMarkdown from 'react-markdown'
import DemoTable from 'archetype-theme/components/DemoTable';

import jsonData from '../data/data.json'
import yamlData from '../data/data.yml'


const Index = () => (
  <div>
    <h1>Ondrej Sika Webs / Archetype</h1>
    <Alert>Hello</Alert>
    <Person
      name='Ondrej Sika'
      imgSrc='https://ondrejsika.com/ondrej/photo/ondrejsika3_200px.jpg'
      bio='Hacker from Prague'
    />
    <ReactMarkdown source={`
# Header h1
## Header h2
### Header h3
#### Header h4
##### Header h5
    `} />
    <DemoTable data={jsonData} />
    <DemoTable data={yamlData} />
    <Footer />
  </div>
)

export default Index
