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
              <span className="bold">{news.title}</span>
            </Link>{" "}
            ({news.date}): {news.perex}
          </li>
        );
      })}
    </ul>
  </Article>
);
export default Page;
