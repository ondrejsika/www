import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Git Rebase"
    ad="git"
    markdown={`
Mám 2 větve, větev master a experiment. Stav repozitáře vypadá takto:

![](/static/rebase/basic-rebase-1.png)

Naším cílem je dostat změny z větve experiment do masteru. Mužů použít merge, ale to nám vytvoří v merge commit kterému se chceme vyhnout. Použití merge vypadá takto:

    git checkout master
    git merge experiment

Výsledkem bude:

![](/static/rebase/basic-rebase-2.png)

Tento výsledek nechceme, chceme mít historii lineární, proto před použitím merge uděláme rebase přeskládání větve experimental na větev master.

Uděláme to takto (vycházíme z výchozího stavu projektu, pokud jsme již vytvořili merge commit, můžeme jej vrátit příkazem \`git reset --hard HEAD~1\`):

![](/static/rebase/basic-rebase-1.png)

    git checkout experimental
    git rebase master

Tyto příkazy nám přeskládají větev experimental do této podoby:

![](/static/rebase/basic-rebase-3.png)

Pak už jen stačí použít fast-forward merge a větev experimental máme začleněnou do masteru:

    git checkout master
    git merge –-ff-only experimental

Výsledek pak vypadá takto:

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

export default Page;
