import React from "react";

import Article from "@app/ondrej-sika.cz/layouts/Article";
import talks from "@app/data/ondrejsika/talks.yml";
import workshops from "@app/data/ondrejsika/workshops.yml";
import Markdown from "@app/common/components/Markdown";

let Page = props => (
  <Article title="Talks &amp; Workshops , I Can Do on Your Event">
    <ul>
      <li>
        <a href="#talks">Talks</a>
      </li>
      <li>
        <a href="#workshops">Workshops</a>
      </li>
    </ul>
    <h1 id="talks">Talks</h1>
    {talks.map((talk, i) => (
      <div key={i}>
        <h2>{talk.title}</h2>
        <h4>Bio</h4>
        <p>{talk.bio}</p>
        <h4>Abstract</h4>
        <p>{talk.abstract}</p>
        <p>
          <a
            href={`mailto:ondrej@sika.io?subject=[${props.site.name}] Ask for a Talk: ${talk.title}`}
          >
            I&apos;m interested in {talk.title}
          </a>
        </p>
        <hr
          style={{ color: "black", borderTop: "1px solid", margin: "15px 0" }}
        />
      </div>
    ))}
    <h1 id="workshops">Workshops</h1>
    {workshops.map((workshop, i) => (
      <div key={i}>
        <h2>{workshop.title}</h2>
        <h4>Bio</h4>
        <p>{workshop.bio}</p>
        <h4>Abstract</h4>
        <p>{workshop.abstract}</p>
        <h4>Requirements</h4>
        <p>
          <Markdown source={workshop.requirements} />
        </p>
        <p>
          <a
            href={`mailto:ondrej@sika.io?subject=[${props.site.name}] Ask for a Workshop: ${workshop.title}`}
          >
            I&apos;m interested in {workshop.title}
          </a>
        </p>
        <hr
          style={{ color: "black", borderTop: "1px solid", margin: "15px 0" }}
        />
      </div>
    ))}
  </Article>
);

export default Page;
