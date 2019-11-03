import Former2 from "@app/common/components/Former2";
import site from "@app/sika-kraml.de/config";

var styleFooter = {
  background: "#00212C"
};
var colorText = {
  color: "#09AEAB"
};
var borderLeft = {
  borderLeft: "1px solid #51AFAB"
};

const Footer = props => (
  <div>
    <div style={styleFooter}>
      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-4">
            <h3 className="text-white">Ondrej Sika</h3>
            <p>
              <a
                href="mailto:ondrej@sika-kraml.de"
                className="a-underline"
                style={colorText}
              >
                ondrej@sika-kraml.de
              </a>
              <br></br>
              <a
                href="tel:+420773452376"
                className="a-underline"
                style={colorText}
              >
                +420 773 452 376
              </a>
            </p>
            <div className="row">
              <a
                href="https://www.linkedin.com/in/ondrejsika/"
                className="a-underline pl-3"
                style={colorText}
              >
                <img src={props.linkedinImg} />
              </a>
              <a
                href="https://github.com/ondrejsika"
                className="a-underline"
                style={colorText}
              >
                <img src={props.githubImg} />
              </a>
              <a
                href="https://www.facebook.com/sikaondrej"
                className="a-underline"
                style={colorText}
              >
                <img src={props.facebookImg} />
              </a>
              <a
                href="https://twitter.com/ondrejsika"
                className="a-underline"
                style={colorText}
              >
                <img src={props.twitterImg} />
              </a>
              <a
                href="https://www.instagram.com/ondrejsika/"
                className="a-underline"
                style={colorText}
              >
                <img src={props.instagramImg} />
              </a>
            </div>
          </div>
          <div className="col-4" style={borderLeft}>
            <h3 className="text-white">Unsere Schulungen:</h3>
            {props.lecture_links.map((link, l) => {
              if (typeof link[0] == "string") {
                return (
                  <li className="mb-3" key={l}>
                    <a href={link[1]} className="a-underline" style={colorText}>
                      {link[0]}
                    </a>
                  </li>
                );
              }
            })}
          </div>
          <div className="col-4 pt-4 pt-md-0" style={borderLeft}>
            <h3 className="text-white">Jiri Kraml</h3>
            <p>
              <a
                href="mailto:jiri@sika-kraml.de"
                className="a-underline"
                style={colorText}
              >
                jiri@sika-kraml.de
              </a>
              <br></br>
              <a
                href="tel:+491773586458"
                className="a-underline"
                style={colorText}
              >
                +49 (0) 177 358658
              </a>
            </p>
            <div className="row">
              <a
                href="https://www.linkedin.com/in/ji%C5%99%C3%AD-kraml-60ba51b4/"
                className="a-underline pl-3"
                style={colorText}
              >
                <img src={props.linkedinImg} />
              </a>
              <a
                href="https://www.xing.com/profile/Jiri_Kraml"
                className="a-underline "
                style={colorText}
              >
                <img width="67" src={props.xingImg} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="center">
          {props.job_links.map((link, j) => {
            return (
              <li className="mb-3 li-row" key={j}>
                <a href={link[1]} className="a-underline" style={colorText}>
                  {link[0]}
                </a>
                &nbsp;|&nbsp;
              </li>
            );
          })}
        </div>
        <p className="text-right text-white fs-9 pt-4">
          <a
            href="/impressum"
            className="fs-11 text a-underline"
            style={colorText}
          >
            Impressum
          </a>{" "}
          | Website by{" "}
          <a
            href="https://zuzjes.com"
            target="_blank"
            className="fs-11 text a-underline"
            style={colorText}
          >
            Zuzana Jeschke
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
