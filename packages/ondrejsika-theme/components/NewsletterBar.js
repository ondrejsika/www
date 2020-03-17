import React from "react";
import Link from "next/link";

const NewsletterBar = () => (
  <div className="alert alert-primary mt-5 text-center" role="alert">
    <h3>Chcete dostávat nové články do emailu? Přihlaste se k newsletteru!</h3>
    <Link href="https://sika.link/newsletter">
      <a className="btn btn-large btn-primary m-3">Přihlásit se k odběru</a>
    </Link>
  </div>
);

export default NewsletterBar;
