import Former2 from "@app/common/components/Former2";
import site from "@app/ondrej-sika.uk/config";

const Footer = props => (
  <div>
    <div className="footer mt-4">
      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-md-3 col-sm-7 col-8 text-white">
            <h3 className="text-white">Ondrej Sika</h3>
            <p>
              <a href="mailto:ondrej@ondrejsika.com" className="a-underline">
                ondrej@ondrejsika.com
              </a>
              <br />
              <a href="tel:+44 XXX XXX XXX" className="a-underline">
                +44 XXX XXX XXX
              </a>
            </p>
            <p>
              <span style={{ fontSize: "0.7em" }}>Company ID</span>
              <br />
              88114163
            </p>
            <p>
              <span style={{ fontSize: "0.7em" }}>VAT ID</span>
              <br />
              CZ9302252102
            </p>
          </div>
          <div className="col-md-2 col-sm-5 col-4">
            <h3 className="text-white">My Training</h3>
            <ul className="text-white">
              <li>
                <a href="/training/docker" className="a-underline">
                  Docker
                </a>
              </li>
              <li>
                <a href="/training/kubernetes" className="a-underline">
                  Kubernetes
                </a>
              </li>
              <li>
                <a href="/training/gitlab-ci" className="a-underline">
                  Gitlab CI
                </a>
              </li>
              <li>
                <a href="/training/git" className="a-underline">
                  Git
                </a>
              </li>
              <li>
                <a href="/training/ansible" className="a-underline">
                  Ansible
                </a>
              </li>
              <li>
                <a href="/training/react" className="a-underline">
                  React & Next.js
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12 pt-4 pt-md-0">
            <h3 className="text-white">Newsletter</h3>
            <p className="text-white">
              Subscribe my newsletter about DevOps articles & my courses
            </p>
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
                    placeholder="e-mail"
                  />
                  <input
                    type="submit"
                    className="btn btn-outline-header"
                    value="Subscribe"
                  />
                </div>
              </Former2>
            </div>
          </div>
          <div className="col-md-2 offset-md-1 col-sm-12">
            <a href="https://www.facebook.com/sikaondrej">
              <img src="/static/fb-hex.svg" className="pl-2 pr-2 pt-1" />
            </a>
            <a href="https://www.instagram.com/ondrejsika/">
              <img src="/static/insta-hex.svg" className="pl-2 pr-2 pt-1" />
            </a>
            <a href="https://www.linkedin.com/in/ondrejsika/">
              <img src="/static/linkedin-hex.svg" className="pl-2 pr-2 pt-1" />
            </a>
            <a href="https://twitter.com/ondrejsika">
              <img src="/static/twitter-hex.svg" className="pl-2 pr-2 pt-1" />
            </a>
            <a href="https://github.com/ondrejsika">
              <img src="/static/github-hex.svg" className="pl-2 pr-2 pt-1" />
            </a>
            <a href="mailto:ondrej@ondrejsika.com">
              <img src="/static/mail-hex.svg" className="pl-2 pr-2 pt-1" />
            </a>
          </div>
        </div>
        <p className="text-center text-white fs-9 pt-4">
          Website by{" "}
          <a
            href="https://zuzjes.com"
            target="_blank"
            className="fs-11 text a-underline"
          >
            Zuzana Jeschke
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
