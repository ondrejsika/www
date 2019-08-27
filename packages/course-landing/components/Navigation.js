import React from "react";
import Link from "next/link";

const links = {
  git: {
    cz: "https://ondrej-sika.cz/skoleni/git?x_source=headline",
    de: "https://ondrej-sika.de/training/git?x_source=headline",
    uk: "https://ondrej-sika.uk/training/git?x_source=headline",
    se: "https://ondrej-sika.se/utbildning/git?x_source=headline",
    at: "https://ondrej-sika.com/training/git?x_source=headline",
    ch: "https://ondrej-sika.com/training/git?x_source=headline",
    nl: "https://ondrej-sika.com/training/git?x_source=headline"
  },
  gitlabci: {
    cz: "https://ondrej-sika.cz/skoleni/gitlab-ci?x_source=headline",
    de: "https://ondrej-sika.de/training/gitlab-ci?x_source=headline",
    uk: "https://ondrej-sika.uk/training/gitlab-ci?x_source=headline",
    se: "https://ondrej-sika.se/utbildning/gitlab?x_source=headline",
    at: "https://ondrej-sika.com/training/gitlab-ci?x_source=headline",
    ch: "https://ondrej-sika.com/training/gitlab-ci?x_source=headline",
    nl: "https://ondrej-sika.com/training/gitlab-ci?x_source=headline"
  },
  docker: {
    cz: "https://ondrej-sika.cz/skoleni/docker?x_source=headline",
    de: "https://ondrej-sika.de/training/docker?x_source=headline",
    uk: "https://ondrej-sika.uk/training/docker?x_source=headline",
    se: "https://ondrej-sika.se/utbildning/docker?x_source=headline",
    at: "https://ondrej-sika.com/training/docker?x_source=headline",
    ch: "https://ondrej-sika.com/training/docker?x_source=headline",
    nl: "https://ondrej-sika.com/training/docker?x_source=headline"
  },
  kubernetes: {
    cz: "https://ondrej-sika.cz/skoleni/kubernetes?x_source=headline",
    de: "https://ondrej-sika.de/training/kubernetes?x_source=headline",
    uk: "https://ondrej-sika.uk/training/kubernetes?x_source=headline",
    se: "https://ondrej-sika.se/utbildning/kubernetes?x_source=headline",
    at: "https://ondrej-sika.com/training/kubernetes?x_source=headline",
    ch: "https://ondrej-sika.com/training/kubernetes?x_source=headline",
    nl: "https://ondrej-sika.com/training/kubernetes?x_source=headline"
  },
  ansible: {
    cz: "https://ondrej-sika.cz/skoleni/ansible?x_source=headline",
    de: "https://ondrej-sika.de/training/ansible?x_source=headline",
    uk: "https://ondrej-sika.uk/training/ansible?x_source=headline",
    se: "https://ondrej-sika.se/utbildning/ansible?x_source=headline",
    at: "https://ondrej-sika.com/training/ansible?x_source=headline",
    ch: "https://ondrej-sika.com/training/ansible?x_source=headline",
    nl: "https://ondrej-sika.com/training/ansible?x_source=headline"
  }
};

class Navigation extends React.Component {
  render() {
    let location = this.props.location || "cz";
    return (
      <div className="container-fluid">
        <div className="container container-width">
          <div className="nav-bar">
            <ul className="mt-2 mb-2">
              <p>
                <li>
                  <Link href={links.git[location]}>
                    <a>Docker</a>
                  </Link>
                </li>
                <li>
                  <Link href={links.kubernetes[location]}>
                    <a>Kubernetes</a>
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
