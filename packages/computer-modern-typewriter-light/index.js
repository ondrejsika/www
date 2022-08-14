import React from "react";
// Import Fonts
import cmunbtl_eot from "./fonts/computer-modern-typewriter-light/cmunbtl.eot";
import cmunbtl_ttf from "./fonts/computer-modern-typewriter-light/cmunbtl.ttf";
import cmunbtl_woff from "./fonts/computer-modern-typewriter-light/cmunbtl.woff";
import cmunbto_eot from "./fonts/computer-modern-typewriter-light/cmunbto.eot";
import cmunbto_ttf from "./fonts/computer-modern-typewriter-light/cmunbto.ttf";
import cmunbto_woff from "./fonts/computer-modern-typewriter-light/cmunbto.woff";

let Font = () => {
  return (
    <style jsx global>{`
      @font-face {
        font-family: "Computer Modern Typewriter Light";
        src: url("${cmunbtl_eot}");
        src: url("${cmunbtl_eot}?#iefix") format("embedded-opentype"),
          url("${cmunbtl_woff}") format("woff"),
          url("${cmunbtl_ttf}") format("truetype");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: "Computer Modern Typewriter Light";
        src: url("${cmunbto_eot}");
        src: url("${cmunbto_eot}?#iefix") format("embedded-opentype"),
          url("${cmunbto_woff}") format("woff"),
          url("${cmunbto_ttf}") format("truetype");
        font-weight: normal;
        font-style: italic;
        font-display: swap;
      }
    `}</style>
  );
};

export default Font;
