import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Příprava na Školení Kubernetes v O2"
    before={
      <div className="alert alert-warning mb-4">
        <p className="mb-0">
          Pokud se Vam neco nepovede nebo mate nejaky dotaz, nevahejte mi napsat
          na: <a href="mailto:ondrej@sika.io">ondrej@sika.io</a>.
        </p>
      </div>
    }
    markdown={`
Skoleni bude probihat v pripravenych virtualnich strojich v cloudu, vsechno co je potreba (minikube, kubectl, helm, slu, ..) je nainstalovano.

Je potreba se pouze pripojit pomoci Remote SSH pluginu ve VS Code.

Na školení je proto potreba pouze toto:

- VS Code - Textový editor - <https://code.visualstudio.com/>
- Remote SSH - Plugin pro VS Code - <https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh>

Video jak se pripojit k virtualnimu stroji v cloudu pomoci VS Code Remote SSH pluginu najdete na youtube: <https://www.youtube.com/watch?v=qNxFR6gbRw0>

Muzete to zkusit sami na testovacim stroji \`lab-example.sikademo.com\` pomoci \`ssh root@lab-example.sikademo.com\` s heslem \`asdfasdf2020\`.
`}
  />
);

export default Page;
