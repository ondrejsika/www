import React from "react";
import { useCookie } from "./useCookie";
import Translate from "@app/common/components/Translate";

import Link from "next/link";
import bar from "./coronavirus3.jpg";
import close from "./close.svg";

let KoronaBar = props => {
  const [hideBar, setHideBar] = useCookie("CoronaBarHide");

  let lang = props.lang || "cs";

  let base_site = "https://ondrej-sika.cz";
  if (lang == "en") base_site = "https://ondrej-sika.com";

  let post_link = props.local_link
    ? "/blog/coronavirus-outbreak"
    : base_site + "/blog/coronavirus-outbreak";

  return (
    <div>
      {!hideBar && (
        <div className="background">
          <div className="container pt-3 pb-3">
            <div className="">
              <a href="#" className="close" onClick={() => setHideBar(true)}>
                <img src={close} className="close" />
              </a>
            </div>
            <div className="text-center">
              <Translate
                lang={lang}
                cs={
                  <Link href={post_link}>
                    <a className="main ibm-mono">
                      Vzhledem k epidemii COVID19,
                      <br /> nabízím všechna školení v on-line formě. 😷🦠
                    </a>
                  </Link>
                }
                en={
                  <Link href={post_link}>
                    <a className="main ibm-mono">
                      Due to COVID19, <br />
                      I&apos;ve turned all my training online. 😷🦠
                    </a>
                  </Link>
                }
              />
            </div>
          </div>
          <style jsx>{`
            .main {
              font-size: 2em;
              font-weight: bold;
            }
            .close {
              height: 1.3em;
            }
            .background {
              background-image: url(${bar});
              background-size: cover;
            }
            @media (max-width: 600px) {
              .background {
                display: none;
              }
            }
            a {
              color: white !important;
            }
            a:hover {
              color: black;
              text-decoration: underline;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default KoronaBar;
