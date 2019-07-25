import '../css'
import Footer from '@app/archetype-theme/components/Footer'
import Alert from '@app/archetype-theme/components/Alert'
import Person from '@app/archetype-theme/components/Person'
import ReactMarkdown from 'react-markdown'
import DemoTable from '@app/archetype-theme/components/DemoTable';
import Translate from '@app/common/components/Translate'
import BootstrapJS from '@app/common/components/BootstrapJS'
import BootstrapComponentWithJS from '@app/archetype-theme/components/BootstrapComponentWithJS';
import Former2 from '@app/common/components/Former2'
import Gauges from '@app/common/components/Gauges'
import { TwitterTweetEmbed } from 'react-twitter-embed';


import jsonData from '../data/data.json'
import yamlData from '../data/data.yml'

import site from '@app/archetype-web/config'
import GoogleAnalytics from '@app/common/components/GoogleAnalytics';

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
    <Former2 site={site} redirect_path="/?submitted=true" name="demo form">
      <input type="text" name="data" defaultValue="Example form value" />
      <input type="submit" value="Submit" />
    </Former2>
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
    <TwitterTweetEmbed
      tweetId={'70261648811761665'}
    />
    <Footer />
    <BootstrapJS />
    <Gauges gauges_site_id={site.gauges_site_id} />
    <GoogleAnalytics google_analytics_site_id={site.google_analytics_site_id} />
  </div>
)

export default Index
