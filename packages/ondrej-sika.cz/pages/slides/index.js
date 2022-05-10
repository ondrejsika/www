import React from "react";
import Link from "next/link";
import slides_list from "@app/ondrej-sika.cz/data/slides.yml";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article title="Slides" hideNewsletter>
    <ul>
      {slides_list.map((s, i) => {
        return (
          <li key={i}>
            <Link href={s.pdf}>
              <a target="_blank" rel="noopener noreferrer">
                <span className="bold">{s.title}</span>
              </a>
            </Link>{" "}
            ({s.date})
          </li>
        );
      })}
    </ul>
  </Article>
);
export default Page;
