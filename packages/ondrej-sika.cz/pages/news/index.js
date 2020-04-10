import React from "react";
import Link from "next/link";
import news_list from "@app/ondrej-sika.cz/data/news.yml";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article title="Novinky" hideNewsletter>
    <ul>
      {news_list.map((news, i) => {
        return (
          <li key={i}>
            <Link href={`/news/${news.id}`}>
              <a>
                <span className="pt-4 bold">{news.title}</span>
              </a>
            </Link>{" "}
            ({news.date}): {news.perex}
          </li>
        );
      })}
    </ul>
  </Article>
);
export default Page;
