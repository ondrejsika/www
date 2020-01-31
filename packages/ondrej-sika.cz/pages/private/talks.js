import Article from "@app/ondrej-sika.cz/layouts/Article";
import talks from "@app/data/ondrejsika/talks.yml";
import workshops from "@app/data/ondrejsika/workshops.yml";

export default props => (
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
    {talks.map(talk => (
      <div>
        <h2>{talk.title}</h2>
        <h4>Bio</h4>
        <p>{talk.bio}</p>
        <h4>Abstract</h4>
        <p>{talk.abstract}</p>
        <p>
          <a
            href={`mailto:ondrej@sika.io?subject=[${props.site.name}] Ask for a Talk: ${talk.title}`}
          >
            I'm interested in {talk.title}
          </a>
        </p>
        <hr
          style={{ color: "black", borderTop: "1px solid", margin: "15px 0" }}
        />
      </div>
    ))}
    <h1 id="workshops">Workshops</h1>
    {workshops.map(workshop => (
      <div>
        <h2>{workshop.title}</h2>
        <h4>Bio</h4>
        <p>{workshop.bio}</p>
        <h4>Abstract</h4>
        <p>{workshop.abstract}</p>
        <p>
          <a
            href={`mailto:ondrej@sika.io?subject=[${props.site.name}] Ask for a Workshop: ${workshop.title}`}
          >
            I'm interested in {workshop.title}
          </a>
        </p>
        <hr
          style={{ color: "black", borderTop: "1px solid", margin: "15px 0" }}
        />
      </div>
    ))}
  </Article>
);
