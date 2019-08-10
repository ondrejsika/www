import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

import site from "@app/ondrej-sika.cz/config";

let style = {
  fontSize: "1.4em",
  fontWeight: "bold"
};

export default () => (
  <div>
    <Head>
      <title>Články - Ondřej Šika</title>
    </Head>
    <MainBar MainBarHeader="Články"></MainBar>

    <div className="container pt-4 pb-2">
      <Markdown
        source={`
- [Nastroje, ktere pouzivam a zjednodusuji mi praci a zivot](/clanky/toolchain)
- [Proc by kazdy mel mit svoji domenu](/clanky/proc-by-kazdy-mel-mit-svoji-domenu/)
- [Vyber osobni wiki](/clanky/vyber-osobni-wiki)
`}
      />
    </div>
  </div>
);
