const TextWithImg = props => (
  <div>
    <h2 className="pt-4 pb-2" id="about-me">
      {props.TextWithImgHeader}
    </h2>
    <div className="row">
      <div className="col-lg-7 col-md-12">
        <p>{props.children}</p>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-9 col-9">
        <img src="/static/ond.jpg" className="img-fluid img-size-90" />
      </div>
      <div className="col-1">
        <a href="https://www.linkedin.com/in/ondrejsika/">
          <img src="/static/linkedin-hex.svg" />
        </a>
        <a href="https://twitter.com/ondrejsika">
          <img src="/static/twitter-hex.svg" />
        </a>
        <a href="https://www.instagram.com/ondrejsika/">
          <img src="/static/insta-hex.svg" />
        </a>
        <a href="https://www.facebook.com/sikaondrej">
          <img src="/static/fb-hex.svg" />
        </a>
        <a href="https://github.com/ondrejsika">
          <img src="/static/github-hex.svg" />
        </a>
        <a href="mailto:ondrej@ondrejsika.com">
          <img src="/static/mail-hex.svg" />
        </a>
      </div>
    </div>
  </div>
);

export default TextWithImg;
