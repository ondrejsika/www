import '@app/ondrej-sika.cz/css'

import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import ReactMarkdown from 'react-markdown'

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
      <title>Články - Ondřej Šika</title>
    </Head>
    <MainBar
      MainBarHeader='Články'>
    </MainBar>

    <div className="container pt-4 pb-2">
      <ReactMarkdown source={`
- [Nastroje, ktere pouzivam a zjednodusuji mi praci a zivot](/clanky/toolchain)
- [Proc by kazdy mel mit svoji domenu](/clanky/proc-by-kazdy-mel-mit-svoji-domenu/)
- [Vyber osobni wiki](/clanky/vyber-osobni-wiki)
`} escapeHtml={false}/>
    </div>
  </div>
)
