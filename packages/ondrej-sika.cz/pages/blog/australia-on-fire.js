import Article from "@app/ondrej-sika.cz/layouts/Article";
import { TwitterTweetEmbed } from "react-twitter-embed";

const TweetWrapper = props => (
  <div
    className="mb-3 mr-3"
    style={{ display: "inline-block", verticalAlign: "top" }}
  >
    {props.children}
  </div>
);

export default () => (
  <Article title="Pomozte Austrálii 🐨🦘❤️">
    <p>
      Dnes ráno jsem viděl na Twitteru{" "}
      <a href="https://twitter.com/hashtag/AustraliaOnFire">#AustraliaOnFire</a>{" "}
      - obraz zkázy. Rozhodl jsem se pomoci. Sám jsem poslal nějaké peníze a
      přemýšlel jsem jak pomoct jestě více. Zaujal mě tento tweet, který mě
      inspiroval k mému činu.
    </p>
    <div className="mt-3 mb-3">
      <center>
        <TwitterTweetEmbed
          tweetId="1213284066755317761"
          options={{ conversation: "none", cards: "hidden" }}
        />
      </center>
    </div>
    <p style={{ fontSize: "1.2em" }}>
      <strong>
        Pokud poůžete Austrálii (a pošlete mi o tom doklad), máte u mě slevu v
        plné výšce Vaší pomoci. Limit je 100 000 CZK.
      </strong>
    </p>
    <p style={{ fontSize: "2em" }} className="text-center">
      <strong>Díky 🐨🦘❤️</strong>
    </p>
    <h3>Můžete začít zde</h3>
    <ul>
      <li>
        <a href="https://www.wires.org.au/donate/emergency-fund">
          https://www.wires.org.au/donate/emergency-fund
        </a>
      </li>
    </ul>
    <div className="mt-5">
      <TweetWrapper>
        <TwitterTweetEmbed
          tweetId="1214028574656565248"
          options={{ conversation: "none" }}
        />
      </TweetWrapper>
      <TweetWrapper>
        <TwitterTweetEmbed
          tweetId="1214025425338458117"
          options={{ conversation: "none" }}
        />
      </TweetWrapper>
      <TweetWrapper>
        <TwitterTweetEmbed
          tweetId="1214128841989541888"
          options={{ conversation: "none" }}
        />
      </TweetWrapper>
      <TweetWrapper>
        <TwitterTweetEmbed
          tweetId="1213737883460235265"
          options={{ conversation: "none" }}
        />
      </TweetWrapper>
    </div>
  </Article>
);
