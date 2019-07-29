import "@app/ondrej-sika.cz/css";
import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import Markdown from "@app/common/components/Markdown";
import Head from "next/head";

let site = {
  lang: "cs"
};

const Index = () => (
  <div>
    <Head>
      <title>Odesláno- Ondřej Šika</title>
    </Head>
    <MainBar MainBarHeader="Formulář byl úspěšně odeslán" />
    <div className="container pt-4">
      <Markdown
        source={`
Brzy se Vám ozvu.

V případě jakýchkoliv dotazů pište na <ondrej@ondrejsika.com>.
`}
      />
      <div style={{ height: "100px" }}></div>
    </div>
  </div>
);

export default Index;
