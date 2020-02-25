import React from "React";
import "@app/sika-kraml.de/css";
import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import ReactMarkdown from "react-markdown";
import { stripIndent } from "common-tags";

// TODO can we rename this file to "sent.js"?

const Index = () => (
  <div>
    <MainBar MainBarHeader="Anfrage abgesendet" />
    <div className="container pt-4">
      <ReactMarkdown
        source={stripIndent`
        Wir werden Sie zum frühesmöglichen Zeitpunkt kontaktieren.

        Fall Sie noch Fragen haben, kontaktieren Sie uns unter <ondrej@ondrejsika.com>.
        `}
      />
      <div style={{ height: "100px" }}></div>
    </div>
  </div>
);

export default Index;
