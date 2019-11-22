import React from "react";
import Link from "next/link";

const links = {
  git: {
    cz: "https://ondrej-sika.cz/skoleni/git?x_source=headline",
    sk: "https://ondrej-sika.cz/skoleni/git?x_source=headline",
    // de: "https://ondrej-sika.de/training/git?x_source=headline",
    // uk: "https://ondrej-sika.uk/training/git?x_source=headline",
    // se: "https://ondrej-sika.se/utbildning/git?x_source=headline",
    at: "https://ondrej-sika.com/training/git?x_source=headline",
    // ch: "https://ondrej-sika.com/training/git?x_source=headline",
    // nl: "https://ondrej-sika.com/training/git?x_source=headline"
    de: "https://ondrej-sika.com/training/git?x_source=headline",
    uk: "https://git-training.uk",
    se: "https://git-utbildning.se",
    ch: "https://git-training.ch",
    nl: "https://git-training.nl"
  },
  gitlabci: {
    cz: "https://ondrej-sika.cz/skoleni/gitlab-ci?x_source=headline",
    sk: "https://ondrej-sika.cz/skoleni/gitlab-ci?x_source=headline",
    // de: "https://ondrej-sika.de/training/gitlab-ci?x_source=headline",
    // uk: "https://ondrej-sika.uk/training/gitlab-ci?x_source=headline",
    // se: "https://ondrej-sika.se/utbildning/gitlab?x_source=headline",
    at: "https://ondrej-sika.com/training/gitlab-ci?x_source=headline",
    ch: "https://ondrej-sika.com/training/gitlab-ci?x_source=headline",
    nl: "https://ondrej-sika.com/training/gitlab-ci?x_source=headline",
    de: "https://gitlab-schulung.de",
    uk: "https://gitlab-training.uk",
    se: "https://ondrej-sika.com/training/gitlab-ci?x_source=headline"
  },
  docker: {
    cz: "https://ondrej-sika.cz/skoleni/docker?x_source=headline",
    sk: "https://ondrej-sika.cz/skoleni/docker?x_source=headline",
    // de: "https://ondrej-sika.de/training/docker?x_source=headline",
    // uk: "https://ondrej-sika.uk/training/docker?x_source=headline",
    // se: "https://ondrej-sika.se/utbildning/docker?x_source=headline",
    // at: "https://ondrej-sika.com/training/docker?x_source=headline",
    // ch: "https://ondrej-sika.com/training/docker?x_source=headline",
    // nl: "https://ondrej-sika.com/training/docker?x_source=headline"
    de: "https://ondrej-sika.com/training/docker?x_source=headline",
    uk: "https://docker-training.uk",
    se: "https://docker-utbildning.se",
    at: "https://docker-training.at",
    ch: "https://docker-training.ch",
    nl: "https://docker-training.nl"
  },
  kubernetes: {
    cz: "https://ondrej-sika.cz/skoleni/kubernetes?x_source=headline",
    sk: "https://ondrej-sika.cz/skoleni/kubernetes?x_source=headline",
    // de: "https://ondrej-sika.de/training/kubernetes?x_source=headline",
    de: "https://kubernetes-schulung.de",
    // uk: "https://ondrej-sika.uk/training/kubernetes?x_source=headline",
    uk: "https://kubernetes-training.uk",
    // se: "https://ondrej-sika.se/utbildning/kubernetes?x_source=headline",
    se: "https://kubernetes-utbildning.se",
    at: "https://ondrej-sika.com/training/kubernetes?x_source=headline",
    ch: "https://ondrej-sika.com/training/kubernetes?x_source=headline",
    nl: "https://ondrej-sika.com/training/kubernetes?x_source=headline"
  },
  ansible: {
    cz: "https://ondrej-sika.cz/skoleni/ansible?x_source=headline",
    sk: "https://ondrej-sika.cz/skoleni/ansible?x_source=headline",
    // de: "https://ondrej-sika.de/training/ansible?x_source=headline",
    de: "https://ansible-schulung.de",
    // uk: "https://ondrej-sika.uk/training/ansible?x_source=headline",
    uk: "https://ansible-training.de",
    // se: "https://ondrej-sika.se/utbildning/ansible?x_source=headline",
    se: "https://ansible-utbildning.se",
    at: "https://ondrej-sika.com/training/ansible?x_source=headline",
    ch: "https://ondrej-sika.com/training/ansible?x_source=headline",
    nl: "https://ondrej-sika.com/training/ansible?x_source=headline"
  },
  terraform: {
    cz: "https://ondrej-sika.cz/skoleni/terraform?x_source=headline",
    sk: "https://ondrej-sika.cz/skoleni/terraform?x_source=headline",
    de: "https://ondrej-sika.de/training/terraform?x_source=headline",
    // de: "https://teraform-schulung.de",
    uk: "https://ondrej-sika.uk/training/terraform?x_source=headline",
    // uk: "https://terraform-training.uk",
    se: "https://ondrej-sika.se/utbildning/terraform?x_source=headline",
    // se: "https://terraform-utbildning.se",
    at: "https://ondrej-sika.com/training/terraform?x_source=headline",
    ch: "https://ondrej-sika.com/training/terraform?x_source=headline",
    nl: "https://ondrej-sika.com/training/terraform?x_source=headline"
  }
};

class Navigation extends React.Component {
  render() {
    let location = this.props.location || "cz";
    return (
      <div className="container-fluid">
        <div
          className={
            this.props.wide ? "container" : "container container-width"
          }
        >
          <div className="nav-bar">
            <ul className="mt-2 mb-2">
              <p>
                <li>
                  <Link href={links.docker[location]}>
                    <a>Docker</a>
                  </Link>
                </li>
                <li>
                  <Link href={links.kubernetes[location]}>
                    <a>Kubernetes</a>
                  </Link>
                </li>
                <li>
                  <Link href={links.terraform[location]}>
                    <a>Terraform</a>
                  </Link>
                </li>
                <li>
                  <Link href={links.ansible[location]}>
                    <a>Ansible</a>
                  </Link>
                </li>
                <li>
                  <Link href={links.git[location]}>
                    <a>Git</a>
                  </Link>
                </li>
                <li>
                  <Link href={links.gitlabci[location]}>
                    <a>Gitlab CI</a>
                  </Link>
                </li>
              </p>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
