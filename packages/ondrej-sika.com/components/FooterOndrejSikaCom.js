import Link from "next/link";

const FooterOndrejSikaCom = () => (
  <div>
    <div className="footer mt-5">
      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-md-3 col-sm-7 col-8 text-white">
            <h3 className="text-white">Ondrej Sika</h3>
            <p>
              <a href="mailto:ondrej@sika.io" className="a-underline">
                ondrej@sika.io
              </a>
              <br />
              <a href="tel:+420773452376" className="a-underline">
                +420 773 452 376
              </a>
            </p>
            <table className="contact-table table-borderless">
              <tbody>
                <tr>
                  <td style={{ paddingRight: "10px" }}>Company ID:</td>
                  <td>88114163</td>
                </tr>
                <tr>
                  <td>VAT ID:</td>
                  <td>CZ9302252102</td>
                </tr>
                {/* <tr>
                  <td>Bank Account:&nbsp;&nbsp;&nbsp;</td>
                  <td>2301432033/2010 (Fio)</td>
                </tr> */}
              </tbody>
            </table>
          </div>
          <div className="col-md-2 col-sm-5 col-4">
            <h3 className="text-white">Trainings</h3>
            <ul className="text-white">
              {[
                ["Docker", "/training/docker"],
                ["Kubernetes", "/training/kubernetes"],
                ["Gitlab CI", "/training/gitlab-ci"],
                ["Git", "/training/git"],
                ["Ansible", "/training/ansible"]
                // ["Terraform", "/training/terraform"],
                // ["React & Next.js", "/training/react"]
              ].map((el, i) => {
                return (
                  <li key={i}>
                    <Link href={el[1]}>
                      <a className="a-underline">{el[0]}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-4 col-sm-12 pt-4 pt-md-0">
            <h3 className="text-white">Newsletter</h3>
            <p className="text-white">
              Are you interested in my work? Subscribe my newsletter and stay
              update!
            </p>
            <div className="input-group pt-3">
              <a
                className="btn btn-outline-header"
                href="https://sika.link/newsletter"
              >
                Subscribe my newsletter
              </a>
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
            <a href="mailto:ondrej@sika.io">
              <img src="/static/mail-hex.svg" className="pl-2 pr-2 pt-1" />
            </a>
          </div>
        </div>
        {/* <p className="text-center">
          <a href="/lektorska-spoluprace" className="a-underline">
            Lektorska spoluprace
          </a>
          <span className="text-white">&nbsp;|&nbsp;</span>
          <a href="/jobs" className="a-underline">
            Nabidka (spolu)prace
          </a>
          <span className="text-white">&nbsp;|&nbsp;</span>
          <a href="/obchodni-spoluprace" className="a-underline">
            Obchodní Spolupráce
          </a>
          <span className="text-white">&nbsp;|&nbsp;</span>
          <a href="/doporucte-me-prosim" className="a-underline">
            Doporučte mě prosím
          </a>
        </p> */}
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

export default FooterOndrejSikaCom;
