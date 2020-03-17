import React from "react";
import Article from "@app/ondrej-sika.cz/layouts/Article";
import InstagramEmbed from "react-instagram-embed";

const Page = () => (
  <Article title="Coronavirus 😷🦠">
    <p>
      Ani Coronavirus nezastaví mé školení. Školím dál ale on-line. Přes Zoom,
      Google Hangouts, Whereby nebo GoToWebinar. Celý tento týden školím Docker
      a Kubernetes pro IBM Germany online a vše běží skvěle, není třeba se bát.
    </p>
    <p>
      Pokud přeci jen máte zájem o školení on-site, po skončení karantény za
      Vámi přijedu, můžete si v{" "}
      <a href="https://calendly.com/ondrejsika/1day">Calendly</a> přebookovat
      termín.
    </p>
    <div className="mt-3 mb-3">
      <center>
        <InstagramEmbed url="https://www.instagram.com/p/B9yZaomHk3P/" />
      </center>
    </div>
  </Article>
);

export default Page;
