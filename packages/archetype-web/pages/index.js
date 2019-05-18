import '../css'
import Footer from '@app/archetype-theme/components/Footer'
import Alert from '@app/archetype-theme/components/Alert'
import Person from '@app/archetype-theme/components/Person'
import ReactMarkdown from 'react-markdown'
import DemoTable from '@app/archetype-theme/components/DemoTable';
import Translate from '@app/common/components/Translate'
import BootstrapJS from '@app/common/components/BootstrapJS'
import BootstrapComponentWithJS from '@app/archetype-theme/components/BootstrapComponentWithJS';

import jsonData from '../data/data.json'
import yamlData from '../data/data.yml'

import site from '@app/archetype-web/config'

const Index = () => (
  <div>
    <code style={{fontSize: '0.8em', color: 'gray'}}>
      {
    
        Object.entries(site).map(function(el, i){
          return <span key={i}>{el[0] + ': ' + el[1]}, </span>
        })
      }
    </code>
    <h1>Ondrej Sika Webs / Archetype</h1>
    <p>
      <Translate lang="en" en="Hello" cs="Ahoj"/>
      <br />
      <Translate lang="cs" en="Hello" cs="Ahoj"/>
    </p>
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
    <BootstrapComponentWithJS />
    <DemoTable data={jsonData} />
    <DemoTable data={yamlData} />
    <Footer />
    <BootstrapJS />
  </div>
)

export default Index
