import Article from "@app/ondrej-sika.cz/layouts/Article";

export default () => (
  <Article
    title="Sprava Cloudflare DNS pomoci Terraformu"
    markdown={`
Kazdy kdo delal neco okolo webu se setkal vice ci mene se spravou DNS. Pokud pouzivate DNS servery od registratora domeny, prace s nim byva strasna. Pokud pouzivate Cloudflare (nebo nejakeho clooud providera jako AWS, Azure, DigitalOcean) byva prace s DNS o dost prijemnejsi. My si vsak ukazeme ze DNS zaznamy muzete mit prehledne v souboru a verzovane Gitem diky [Terraformu](/terraform).

Na clanku pracuji ...
`}
    after={
      <div className="alert alert-success mt-5 text-center" role="alert">
        <h2>Zajimate se o Terraform? Zkuste me skoleni Terraformu!</h2>
        <a className="btn btn-large btn-success m-3" href="/skoleni/terraform">
          Ukazat skoleni Terraformu
        </a>
      </div>
    }
  />
);
