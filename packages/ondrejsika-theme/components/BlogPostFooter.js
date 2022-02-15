import React from "react";
import ondrejsika from "@app/data/pictures/ondrejsika.jpg";
import Button from "@app/ondrejsika-theme/components/Button";
import { Row, Col, ButtonGroup } from "react-bootstrap";

const BlogPostFooter = (props) => {
  return (
    <Row className="pt-3 pb-2">
      <Col md={2}>
        <img src={ondrejsika.src} className="img-fluid mb-3" />
      </Col>
      <Col md={10}>
        <h4>Ondřej Šika</h4>
        <p>
          Jsem freelance DevOps konzultant a lektor. Zlepšuji práci vývojářských
          týmu zaváděním efektivních procesů ve vývoji. Naučím Vás používat
          prověřené nástroje a technologie, které povedou k rychlejšímu vývoji a
          bezpečnějšímu provozu vašeho software.
        </p>

        <ButtonGroup className="mb-2 mr-2">
          <Button href="mailto:ondrej@sika.io">Napiš&nbsp;mi</Button>
        </ButtonGroup>
        {props.trainingButtonLink && props.trainingButtonText && (
          <ButtonGroup className="mb-2 mr-2">
            <Button href={props.trainingButtonLink}>
              {props.trainingButtonText}
            </Button>
          </ButtonGroup>
        )}
        <ButtonGroup className="mb-2 mr-2">
          <Button href="https://sika.link/newsletter">Newsletter</Button>
        </ButtonGroup>
        <ButtonGroup className="mb-2 mr-2">
          <Button href="https://sika.link/slack-sikapublic">
            Připoj&nbsp;se&nbsp;na&nbsp;Slack
          </Button>
        </ButtonGroup>
        <ButtonGroup className="mb-2 mr-2">
          <Button href="/devopslive">DevOps&nbsp;Live</Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
};

export default BlogPostFooter;
