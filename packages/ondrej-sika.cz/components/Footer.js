import Link from "next/link";

import facebookhex from "@app/data/pictures/social-networks/fb-hex.svg";
import instagramhex from "@app/data/pictures/social-networks/instagram-hex.svg";
import linkedinhex from "@app/data/pictures/social-networks/linkedin-hex.svg";
import twitterhex from "@app/data/pictures/social-networks/twitter-hex.svg";
import githubhex from "@app/data/pictures/social-networks/github-hex.svg";
import mailhex from "@app/data/pictures/social-networks/mail-hex.svg";

const Footer = () => (
  <div>
    <div className="footer mt-5">
      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-md-3 col-sm-7 col-8 text-white">
            <h3 className="text-white">Ondřej Šika</h3>
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
                  <td>IČ:</td>
                  <td>88114163</td>
                </tr>
                <tr>
                  <td>DIČ:</td>
                  <td>CZ9302252102</td>
                </tr>
                <tr>
                  <td>Účet:&nbsp;&nbsp;&nbsp;</td>
                  <td>2301432033/2010 (Fio)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-2 col-sm-5 col-4">
            <h3 className="text-white">Moje Kurzy</h3>
            <ul className="text-white">
              {[
                ["Docker", "/skoleni/docker"],
                ["Kubernetes", "/skoleni/kubernetes"],
                ["Gitlab CI", "/skoleni/gitlab-ci"],
                ["Git", "/skoleni/git"],
                ["Ansible", "/skoleni/ansible"],
                ["Terraform", "/skoleni/terraform"],
                ["Prometheus", "/skoleni/prometheus"],
                ["Proxmox", "/skoleni/proxmox"],
                ["React & Next.js", "/skoleni/react"]
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
            <h3 className="text-white">Zajímají Vás novinky?</h3>
            <p className="text-white">
              Odebírejte můj newsletter a budete v obraze!
            </p>
            <div className="input-group pt-3">
              <a
                className="btn btn-outline-header"
                href="https://sika.link/newsletter"
              >
                Přihlásit se k odběru článků a novinek
              </a>
            </div>
          </div>
          <div className="col-md-2 offset-md-1 col-sm-12">
            <a href="https://www.facebook.com/sikaondrej">
              <img src={facebookhex} className="pl-2 pr-2 pt-1" />
            </a>
            <a href="https://www.instagram.com/ondrejsika/">
              <img src={instagramhex} className="pl-2 pr-2 pt-1" />
            </a>
            <a href="https://www.linkedin.com/in/ondrejsika/">
              <img src={linkedinhex} className="pl-2 pr-2 pt-1" />
            </a>
            <a href="https://twitter.com/ondrejsika">
              <img src={twitterhex} className="pl-2 pr-2 pt-1" />
            </a>
            <a href="https://github.com/ondrejsika">
              <img src={githubhex} className="pl-2 pr-2 pt-1" />
            </a>
            <a href="mailto:ondrej@sika.io">
              <img src={mailhex} className="pl-2 pr-2 pt-1" />
            </a>
          </div>
        </div>
        <p className="text-center">
          <Link href="/lektorska-spoluprace">
            <a className="a-underline">Lektorská spolupráce</a>
          </Link>
          <span className="text-white">&nbsp;|&nbsp;</span>
          <Link href="/jobs">
            <a className="a-underline">Nabídka (spolu)práce</a>
          </Link>
          <span className="text-white">&nbsp;|&nbsp;</span>
          <Link href="/obchodni-spoluprace">
            <a className="a-underline">Obchodní Spolupráce</a>
          </Link>
          <span className="text-white">&nbsp;|&nbsp;</span>
          <Link href="/doporuceni">
            <a className="a-underline">Doporučení</a>
          </Link>
          <span className="text-white">&nbsp;|&nbsp;</span>
          <Link href="/doporucte-me-prosim">
            <a className="a-underline">Doporučte mě prosím</a>
          </Link>
        </p>
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
