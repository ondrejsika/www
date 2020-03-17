import React from "react";
import Article from "@app/ondrej-sika.cz/layouts/Article";
import InstagramEmbed from "react-instagram-embed";

const Page = () => (
  <Article title="Coronavirus 😷🦠">
    <p>
      Coronavirus me skoleni nezastavi, skolim dal ale on-line. Prez Zoom,
      Google Hangouts, Whereby nebo GoToWebinar. Prave ted skolim Docker a
      Kubernetes pro IBM Germany online a vse bezi skvele, neni treba se bat.
    </p>
    <p>
      Pokud preci jen mate zajem o skoleni on-site, po zkonceni karanteny za
      Vami prijedu, muzete si v Calendly prebookovat termin.
    </p>
    <div className="mt-3 mb-3">
      <center>
        <InstagramEmbed url="https://www.instagram.com/p/B9yZaomHk3P/" />
      </center>
    </div>
  </Article>
);

export default Page;
