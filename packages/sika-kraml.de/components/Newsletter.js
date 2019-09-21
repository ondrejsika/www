import Former2 from "@app/common/components/Former2";
import site from "@app/sika-kraml.de/config";
var color = {
  background: "#4EA9A6"
};

const IntroBar = props => (
  <div style={color}>
    <div className="container pt-4 pb-3 text-white">
      <div className="row">
        <div className="col-8">
          <h3 className="text-white">Bestellen Sie unser Newsletter!</h3>
          <p className="text-white">Seien Sie immer im Bild</p>
        </div>
        <div className="col-4">
          <div className="input-group pt-3">
            <Former2
              site={site}
              name="Newsletter Subscription"
              redirect_path="/odeslano"
            >
              <div className="input-group-append">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="validationDefault03"
                  placeholder="E-Mail"
                />
                <input
                  type="submit"
                  className="btn btn-outline-header"
                  value={props.NewsletterBtn}
                />
              </div>
            </Former2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default IntroBar;
