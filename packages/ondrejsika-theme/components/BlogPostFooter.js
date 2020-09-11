import React from "react";
import ondrejsika from "@app/data/pictures/ondrejsika.jpg";
import Button from "@app/ondrejsika-theme/components/Button";

const BlogPostFooter = props => {
  return (
    <div className="row pt-3 pb-2">
      <div className="col-2">
        <img src={ondrejsika} className="img-fluid  mb-3" />
      </div>
      <div className="col-10">
        <h4>Ondřej Šika</h4>
        <p>
          Jsem freelance DevOps konzultant a lektor. Zlepšuji práci vývojářských
          týmu zaváděním efektivních procesů ve vývoji. Naučím Vás používat
          prověřené nástroje a technologie, které povedou k rychlejšímu vývoji a
          bezpečnějšímu provozu vašeho software.
        </p>
        <span className="mr-3">
          <Button href="mailto:ondrej@sika.io">Napiš mi</Button>
        </span>
        {props.trainingButtonLink && props.trainingButtonText && (
          <span className="mr-3">
            <Button href={props.trainingButtonLink}>
              {props.trainingButtonText}
            </Button>
          </span>
        )}
        <span className="mr-3">
          <Button href="https://sika.link/newsletter">Newsletter</Button>
        </span>
        <span className="mr-3">
          <Button href="https://sika.link/slack-sikapublic">
            Připoj se na Slack
          </Button>
        </span>
        <span className="mr-3">
          <Button href="/devopslive">DevOps Live</Button>
        </span>
      </div>
    </div>
  );
};

export default BlogPostFooter;
