import '@app/ondrej-sika.cz/css'
import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import ReactMarkdown from 'react-markdown'

let site = {
  lang: 'cs'
}

const Index = () => (
  <div>
    <MainBar MainBarHeader='Formulář byl úspěšně odeslán'/>
    <div className="container pt-4">
    <ReactMarkdown source={`
Brzy se Vám ozvu.

V případě jakýchkoliv dotazů pište na <ondrej@ondrejsika.com>.
`}/>
    <div style={{height: '100px'}}></div>
    </div>
  </div>
)

export default Index
