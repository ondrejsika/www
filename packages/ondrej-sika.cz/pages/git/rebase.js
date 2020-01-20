import Article from "@app/ondrej-sika.cz/layouts/Article";

export default () => (
  <Article
    title="Git Rebase"
    markdown={`
Mam 2 vetve, vetev master a experiment. Stav repozitare vypada takto:

![](/static/rebase/basic-rebase-1.png)

Nasim cilem je dostat zmeny z vetve experiment do masteru. Muzu pouzit merge, ale to nam vytvori v merge commit kteremu se chceme vyhnout. Pouziti merge vypada takto:

    git checkout master
    git merge experiment

Vysledkem bude:

![](/static/rebase/basic-rebase-2.png)

Tento vysledek nechceme, chceme mit historii linearni, proto pred pouzitim merge udelame rebase – preskladani vetve experimental na vetev master.

Udelame to takto (vychazime z vychoziho stavu projektu, pokud jsme jiz vytvorili merge commit, muzeme jej vratit prikazem \`git reset –hard HEAD~1\`):

![](/static/rebase/basic-rebase-3.png)

    git checkout experimental
    git rebase master

Tyto prikazy nam preskladaji vetev experimental do teto podoby:

Pak uz jen staci pouzit fast forward merge a vetev mame experimental zaclenenou do masteru:

    git checkout master
    git merge –-ff-only experimental

Vysledek pak vypada takto:

![](/static/rebase/basic-rebase-4.png)
`}
  >
    <style
      dangerouslySetInnerHTML={{
        __html: `
       .container img {
        width: 30%;
      }
    `
      }}
    />
  </Article>
);
