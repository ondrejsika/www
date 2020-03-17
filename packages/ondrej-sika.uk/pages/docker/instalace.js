import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import TextWithImg from "@app/ondrejsika-theme/components/TextWithImg";
import StatisticBar from "@app/ondrejsika-theme/components/StatisticBar";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";

import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

let site = {
  lang: "cs"
};

let style = {
  fontSize: "1.4em",
  fontWeight: "bold"
};

const Install = () => (
  <div>
    <Head></Head>
    <MainBar header="Instalace Dockeru"></MainBar>

    <div className="container pt-4 pb-2">
      <Markdown
        source={`
Budeme používat Docker CE (Community Edition). Pro mě školení i drtivou většinou práce stačí.

### Windows

#### Windows 10 Pro a vyšší (s podporou Hyper-V)

Tyto Windows podporují Docker for Windows, stáhněte jej zde: [Docker pro Windows](https://sika.link/docker-for-windows)
Při instalaci nechte defaultní nastavení, při výběru typu kontejneru nechte vybrané Linuxové kontejnery.<br/><br/>
Po instalaci spuste Docker do do terminalu napiste: docker run ondrejsika/verify-docker a meli by jste dostat:

    sika@sika-x250:~$ docker run ondrejsika/verify-docker
    Unable to find image 'ondrejsika/verify-docker:latest' locally
    latest: Pulling from ondrejsika/verify-docker
    cd784148e348: Already exists
    Digest: sha256:635008c99afddb282476e886e693a25f32180be934d4c040278c73d2a7537d00
    Status: Downloaded newer image for ondrejsika/verify-docker:latest
    Your Docker is working :)

Pokud vám Docker vypíše něco jiného, dejte mi vědět na email ondrej@sika.io.

Návod na instalaci Dockeru pro Windows na oficiálních stránkách Dockeru: [zde] (https://docs.docker.com/docker-for-windows/install/)

#### Windows bez Hyper-V (Window 7, Windows 10 Home, …)

Pokud máte Windows, které nepodporují Hyper-V, musíte použít Docker Toolbox. Docker Toolbox je balíček Dockeru a Virtualboxu (pokud již VirtualBox máte, použije ten Váš), který vám spustí Docker ve virtuálním stroji.


Stáhnout si jej můžete zde: [Docker Toolbox](https://sika.link/docker-toolbox-windows)

Po instalaci spusťte program Docker Quikstart Terminál, počkejte až se Vám spustí VM a pak spusťte: docker run ondrejsika/verify-docker a měli by jste dostat stejný výstup (Your Docker is working) jako při použití Docker pro Windows.

### Mac OS

Na Macu jsou opět 2 varianty Dockeru: Docker  Mac a Docker Toolbox. Použijte Docker pro Mac, pokud nemáte podporu xhive (zjistíte takž že do terminálu napíšete \`sysctl kern.hv_support\`) použijte Toolbox.

stáhněte si Docker pro Mac: [zde](https://sika.link/docker-for-mac)
<br/>případně Toolbox: [zde](https://sika.link/docker-toolbox-mac)


Po instalaci spustě Docker do do terminálu napište: \`docker run ondrejsika/verify-docker\` a měli by jste dostat:

    sika@sika-x250:~$ docker run ondrejsika/verify-docker
    Unable to find image 'ondrejsika/verify-docker:latest' locally
    latest: Pulling from ondrejsika/verify-docker
    cd784148e348: Already exists
    Digest: sha256:635008c99afddb282476e886e693a25f32180be934d4c040278c73d2a7537d00
    Status: Downloaded newer image for ondrejsika/verify-docker:latest
    Your Docker is working :)

### Linux
Na Linuxu nepoužívejte Docker z distribučních balíčků, je tam starý. Postupujte podle oficiálního návodu na: [zde](https://docs.docker.com/install/linux/docker-ce/debian/) pro Debian, případně si vyberte svoji distribuci v levém menu.


Pokud máte problém s instalací a nebo jakýkoliv dotaz, neváhejte mě napsat na [ondrej@sika.io](ondrej@sika.io)
`}
      />
    </div>
  </div>
);

export default Install;
