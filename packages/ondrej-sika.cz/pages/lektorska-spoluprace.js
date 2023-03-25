import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

const Install = () => (
  <div>
    <Head>
      <title>Lektorská spolupráce - Ondrej Sika</title>
    </Head>
    <MainBar header="LEKTORSKA SPOLUPRACE"></MainBar>

    <style
      dangerouslySetInnerHTML={{
        __html: `
       .post-body img {
        width: 30%;
      }
    `
      }}
    />

    <div className="container pt-4 pb-2 post-body">
      <Markdown
        source={`
Nabízím možnost spolupráce jako Váš externí lektor. Mohu pro Vás školit své stávající kurzy a workshopy, mohu pro Vás připravit kurz na přání nebo školit nějaký Váš stávající kurz.

Moje cena je 32 000 CZK za den školení, ale jsem otevřen diskuzi.

Mám zkušenosti v oblastech:

- Vývoj Software Python, Django
- Verzování za pomoci GITu,  Gitlab CI (Continues itegration) – Automatické testování a deployment
- Docker, Kubernetes, Ansible

Nebo cokoliv co skolim – [vsechny kurzy](/skoleni).  Každé školení Vám mohu upravit na míru.
`}
      />
    </div>
  </div>
);

export default Install;
