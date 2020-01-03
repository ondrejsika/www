import Article from "@app/ondrej-sika.cz/layouts/Article";
import talks from "@app/data/ondrejsika/talks.yml";

export default props => (
  <Article title="Talks, I Can Do on Your Event">
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
  </Article>
);
