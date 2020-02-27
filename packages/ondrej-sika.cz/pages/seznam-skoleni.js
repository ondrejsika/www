import React from "react";
import Article from "@app/ondrej-sika.cz/layouts/Article";
import Link from "next/link";

const Page = () => (
  <Article title="Seznam všech mých školení" hideNewsletter={true}>
    <ul>
      {[
        ["GIT", "/skoleni/git"],
        ["GITLAB CI", "/skoleni/gitlab-ci"],
        ["DOCKER", "/skoleni/docker"],
        ["KUBERNETES", "/skoleni/kubernetes"],
        ["RANCHER", "/skoleni/rancher"],
        ["ANSIBLE", "/skoleni/ansible"],
        ["TERRAFORM", "/skoleni/terraform"],
        ["PROMETHEUS", "/skoleni/prometheus"],
        ["PROXMOX", "/skoleni/proxmox"],
        ["ELK / EFK", "/skoleni/elk"],
        ["REACT & NEXT.JS", "/skoleni/react"],
        ["VIDEOKURZY", "/videokurzy"]
      ].map((link, i) => (
        <li key={i}>
          <Link href={link[1]}>
            <a>{link[0]}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Article>
);

export default Page;
