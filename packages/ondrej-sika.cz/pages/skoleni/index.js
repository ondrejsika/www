import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";

import Head from "next/head";
import Link from "next/link";

let links = [
  ["GIT", "/skoleni/git"],
  ["GITLAB CI", "/skoleni/gitlab-ci"],
  ["DOCKER", "/skoleni/docker"],
  ["KUBERNETES", "/skoleni/kubernetes"],
  ["OPENSHIFT", "/skoleni/openshift", "new"],
  ["ARGOCD", "/skoleni/argocd", "new"],
  ["RANCHER", "/skoleni/rancher"],
  ["ANSIBLE", "/skoleni/ansible"],
  ["TERRAFORM", "/skoleni/terraform"],
  ["CLOUDFLARE", "/skoleni/cloudflare", "new"],
  ["PROMETHEUS", "/skoleni/prometheus"],
  ["PROXMOX", "/skoleni/proxmox"],
  ["ELK / EFK", "/skoleni/elk"],
  ["DIGITAL OCEAN", "/skoleni/digitalocean"],
  ["PACKER", "/skoleni/packer", "new"],
  ["VAULT", "/skoleni/vault", "new"],
  // ["AWS", "/skoleni/aws"],
  // ["OPEN STACK", "/skoleni/openstack"],
  // ["GO (GOLANG)", "/skoleni/go"],
  ["DJANGO", "/skoleni/django"],
  // ["REACT & NEXT.JS", "/skoleni/react"],
  ["VIDEOKURZY", "/videokurzy"]
];

const Index = () => (
  <div>
    <Head>
      <title>Školení - Ondřej Šika</title>
    </Head>
    <MainBar header="Nabídka Školení" />
    <div className="container pb-4 mt-5">
      {links.map((link, i) => {
        return (
          <div key={i}>
            <Link href={link[1]}>
              <a>
                <h1>{link[0]}</h1>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  </div>
);

export default Index;
