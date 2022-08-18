import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

import docker from "@app/data/pictures/courses/video/docker-screenshot-600.png";
import kubernetes from "@app/data/pictures/courses/video/kubernetes-screenshot-600.png";
import terraform from "@app/data/pictures/courses/video/terraform-screenshot-600.png";
import gitlabCi from "@app/data/pictures/courses/video/gitlab-ci-screenshot-600.png";

const Page = (props) => (
  <Article
    site={props.site}
    title="Videokurzy"
    header={
      <>
        Videokurzy <FaYoutube />
      </>
    }
  >
    <div className="alert alert-success mt-3 mb-5" role="alert">
      <p style={{ fontSize: "1.2em" }}>
        Připravuji videokurzy mých nejpopulárnějších školení. Budou k dispozici
        koncem Ledna. Pokud chcete napsat až budou venku,{" "}
        <a
          href="https://airtable.com/embed/shrIKXtFAlneUeI2e"
          style={{ fontSize: "1em" }}
        >
          zanechte mi email
        </a>
        .
      </p>
    </div>

    <div className="row">
      <div className="col-6">
        <h2 className="text-center">Úvod od Dockeru</h2>
        <p className="text-center">
          Cena: <span>3000 CZK</span>
        </p>
        <img src={docker.src} className="img-fluid" />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Link href="/videokurzy/pripravuji">
            <a>
              <FaYoutube style={{ fontSize: "5em", color: "white" }} />
            </a>
          </Link>
        </div>
      </div>
      <div className="col-6">
        <h2 className="text-center">Úvod od Kubernetes</h2>
        <p className="text-center">
          Cena: <span>3000 CZK</span>
        </p>
        <img src={kubernetes.src} className="img-fluid" />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Link href="/videokurzy/pripravuji">
            <a>
              <FaYoutube style={{ fontSize: "5em", color: "white" }} />
            </a>
          </Link>
        </div>
      </div>
      <div className="col-6">
        {" "}
        <h2 className="text-center">Úvod od Terraformu</h2>
        <p className="text-center">
          Cena: <span>3000 CZK</span>
        </p>
        <img src={terraform.src} className="img-fluid" />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Link href="/videokurzy/pripravuji">
            <a>
              <FaYoutube style={{ fontSize: "5em", color: "white" }} />
            </a>
          </Link>
        </div>
      </div>
      <div className="col-6">
        {" "}
        <h2 className="text-center">Úvod od Gitlab CI</h2>
        <p className="text-center">
          Cena: <span>3000 CZK</span>
        </p>
        <img src={gitlabCi.src} className="img-fluid" />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Link href="/videokurzy/pripravuji">
            <a>
              <FaYoutube style={{ fontSize: "5em", color: "black" }} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  </Article>
);

export default Page;
