import React from "react";
import { useCookie } from "./useCookie";

import Link from "next/link";

import bar from "./bar2.jpg";

let AustraliaFiresBar = (props) => {
  const [hideBar, setHideBar] = useCookie("AustraliaFiresBarhideBar");

  let post_link = props.local_link
    ? "/blog/australia-on-fire"
    : "https://ondrej-sika.cz/blog/australia-on-fire";
  return (
    <div>
      {!hideBar && (
        <div
          className=" text-white"
          style={{ backgroundImage: `url(${bar})`, backgroundSize: "cover" }}
        >
          <div className=" container pt-3 pb-3">
            <div className="text-right">
              <a href="#" onClick={() => setHideBar(true)}>
                close
              </a>
            </div>
            <div className="text-center">
              <Link href={post_link}>
                <a className="main">
                  Přispěte na pomoc Austrálii 🐨🦘❤️, <br />
                  dostanete slevu na školení nebo konzultaci ve výši daru.
                </a>
              </Link>
            </div>
          </div>
          <style jsx>{`
            .main {
              font-size: 2em;
            }
            a {
              color: white;
            }
            a:hover {
              color: white;
              text-decoration: underline;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default AustraliaFiresBar;
