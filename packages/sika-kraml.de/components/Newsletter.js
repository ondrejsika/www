const IntroBar = props => (
  <div
    style={{
      background: "#4EA9A6"
    }}
  >
    <div className="container pt-4 pb-3 text-white">
      <div className="row">
        <div className="col-8">
          <h3 className="text-white">Bestellen Sie unser Newsletter!</h3>
          <p className="text-white">Seien Sie immer im Bild</p>
        </div>
        <div className="col-4 pt-3">
          <a
            className="btn btn-lg btn-outline-header"
            target="_blank"
            href="https://sika.link/newsletter-sika-kraml"
          >
            Subscribe
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default IntroBar;
