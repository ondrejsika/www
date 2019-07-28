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
      <title>Chocolatey - Package manager pro Windows - Ondřej Šika</title>
    </Head>
    <MainBar
      MainBarHeader='Chocolatey - Package manager pro Windows'>
    </MainBar>

    <div className="container pt-4 pb-2">
      <ReactMarkdown source={`
### Co je Chocolatey

Chocolatey je balickovaci system pro Windows, podobny jako je [Brew](/navody/brew) na Macu. Vice informaci naleznete na [chocolatey.org](https://chocolatey.org).

### Instalace Chocolatey

Vice o instalaci najdete na <https://chocolatey.org/install>.

Pokud chcete nainstalovat Chcoco jednim prikazem, puste CMD nebo PowerShell jako Admininstrator.

#### CMD

    @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

#### Powershell

    Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))


### Instalace balicku pomoci Chocolatey

Pokud chcete nainstalovat nejaky balicek, instalujte pomoci

    choco install <package>

Napriklad

    choco install docker-desktop


`} escapeHtml={false}/>
    </div>
  </div>
)
