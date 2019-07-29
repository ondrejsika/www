import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import Markdown from "@app/common/components/Markdown";

import Head from 'next/head'

let site = {
  lang: 'cs'
}

let style = {
  fontSize: '1.4em',
  fontWeight: 'bold',
}

export default () => (
  <div>
    <Head>
      <title>Vyber osobni wiki - Ondřej Šika</title>
    </Head>
    <MainBar
      MainBarHeader='Vyber osobni wiki'>
    </MainBar>

    <div className="container pt-4 pb-2">
      <Markdown source={`
Na clanku pracuji ...
`}/>
    </div>
  </div>
)
