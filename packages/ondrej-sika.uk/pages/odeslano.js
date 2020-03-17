import "@app/ondrej-sika.cz/css";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import Markdown from "@app/common/components/Markdown";

let site = {
  lang: "cs"
};

const Index = () => (
  <div>
    <MainBar header="Formulář byl úspěšně odeslán" />
    <div className="container pt-4">
      <Markdown
        source={`
Brzy se Vám ozvu.

V případě jakýchkoliv dotazů pište na <ondrej@sika.io>.
`}
      />
      <div style={{ height: "100px" }}></div>
    </div>
  </div>
);

export default Index;
