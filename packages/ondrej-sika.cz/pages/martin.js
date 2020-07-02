import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";
import martin from "@app/data/pictures/martinjurco_portrait.jpg";

export default function InvitePage() {
  return (
    <Article
      title="Martin Jurčo"
      subheader="#operations #scaling #marketing #sales"
      hideNewsletter={true}
    >
      <div className="row">
        <div className="col-8">
          <p>
            Martin je moje pravá ruka co se týče operativy, škálování,
            marketingu a obchodu.
          </p>
          <p>
            Potkali jsme se spolu na Slush Poolu a díky němu nemusím řešit
            agendu a můžu dělat to, v čem jsem dobrý - DevOps.
          </p>
          <p>
            Kontakt na Martina je{" "}
            <a href="mailto:martin@jurco.io">martin@jurco.io</a>, pro případnou
            spolupráci se mnou (Ondřejem Šikou), pište na{" "}
            <a href="mailto:spoluprace@sika.io">spoluprace@sika.io</a>
          </p>
        </div>
        <div className="col-4">
          <img src={martin} className="img-fluid" />
        </div>
      </div>
    </Article>
  );
}
