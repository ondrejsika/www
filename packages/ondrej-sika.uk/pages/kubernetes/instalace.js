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
      MainBarHeader='Instalace Kubernetes pro lokalni vyvoj'>
    </MainBar>

    <div className="container pt-4 pb-2">
      <ReactMarkdown source={`
Navod mam popsany v [repozitari s kurzem](https://github.com/ondrejsika/kubernetes-training-examples#install).
`} escapeHtml={false}/>
    </div>
  </div>
)

export default Install
