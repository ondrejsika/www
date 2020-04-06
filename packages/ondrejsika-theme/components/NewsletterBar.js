import React from "react";
import Button from "@app/ondrejsika-theme/components/Button";

const NewsletterBar = props => (
  <div className="alert alert-primary mt-5 text-center" role="alert">
    <h3>Chcete dostávat nové články do emailu? Přihlaste se k newsletteru!</h3>
    <div className="mt-3 mb-3">
      <Button
        site={props.site}
        type="outline-primary"
        href="https://sika.link/newsletter"
      >
        Přihlásit se k odběru
      </Button>
    </div>
  </div>
);

export default NewsletterBar;
