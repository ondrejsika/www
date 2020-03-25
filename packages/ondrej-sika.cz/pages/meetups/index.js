import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article title="Meetups" hideNewsletter={true}>
    <p>Meetupy, které pořádám a spolupořádám</p>
    <ul>
      <li>
        <a href="#zeit-czech-community">ZEIT Czech Community</a>
      </li>
      <li>
        <a href="#prague-hashicorp-user-group">Prague HashiCorp User Group</a>
      </li>
      <li>
        <a href="#salzburg-devops-meetups">Salzburg DevOps Meetups</a>
      </li>
    </ul>
    <h2 id="zeit-czech-community">ZEIT Czech Community</h2>
    <p>
      <a href="https://www.meetup.com/ZEIT-Czech-Community/">
        https://www.meetup.com/ZEIT-Czech-Community/
      </a>
    </p>
    <h2 id="prague-hashicorp-user-group">Prague HashiCorp User Group</h2>
    <p>
      <a href="https://www.meetup.com/Prague-HashiCorp-User-Group/">
        https://www.meetup.com/Prague-HashiCorp-User-Group/
      </a>
    </p>
    <h2 id="salzburg-devops-meetups">Salzburg DevOps Meetups</h2>
    <p>
      <a href="https://www.meetup.com/Salzburg-DevOps-Meetups/">
        https://www.meetup.com/Salzburg-DevOps-Meetups/
      </a>
    </p>
  </Article>
);

export default Page;
