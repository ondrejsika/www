import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import TextWithImg from '@app/ondrej-sika.cz/components/TextWithImg';
import StatisticBar from '@app/ondrej-sika.cz/components/StatisticBar';
import CompaniesBar from '@app/ondrej-sika.cz/components/CompaniesBar';
import CompaniesBar1 from '@app/ondrej-sika.cz/static/webglobe-yegon-sq.png';
import ReactMarkdown from 'react-markdown'

import Head from 'next/head'

let site = {
  lang: 'cs'
}

let style = {
  fontSize: '1.4em',
  fontWeight: 'bold',
}

const Install = () => (
  <div>
    <Head>
    </Head>
    <MainBar
      MainBarHeader='Návody'>
    </MainBar>

    <div className="container pt-4 pb-2">
      <ReactMarkdown source={`
### Docker

- [Instalace](/docker/instalace)

### Kubernetes

- [Instalace](/kubernetes/instalace)

### Git

- [Instalace](/git/instalace)
- [Rebase](/git/rebase)
`} escapeHtml={false}/>
    </div>
  </div>
)

export default Install
