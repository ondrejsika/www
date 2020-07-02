import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";
import martin from "@app/data/pictures/martinjurco_portrait.jpg";

export default function InvitePage() {
  return (
    <Article
      title="Martin Jurco"
      subheader="#operations #scaling #marketing #sales"
      hideNewsletter={true}
    >
      <div className="row">
        <div className="col-8">
          <p>
            Martin je moje prava ruka co se tyka operativy, skalovani,
            marketingu a obchodu.
          </p>
          <p>
            Potkali jsme se spolu na Slush Poolu a diky nemu nemusim resit
            agendu a muzu delat to v cem jsem dobry - DevOps.
          </p>
          <p>
            Kontakt na Martina je{" "}
            <a href="mailto:martin@jurco.io">martin@jurco.io</a>, pro pripadnou
            spolupraci se mnou (Ondrejem Sikou), piste na{" "}
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
