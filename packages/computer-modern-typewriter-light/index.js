// Import Fonts
import cmunbtl_eot from "./fonts/computer-modern-typewriter-light/cmunbtl.eot";
import cmunbtl_svg from "./fonts/computer-modern-typewriter-light/cmunbtl.svg";
import cmunbtl_ttf from "./fonts/computer-modern-typewriter-light/cmunbtl.ttf";
import cmunbtl_woff from "./fonts/computer-modern-typewriter-light/cmunbtl.woff";
import cmunbto_eot from "./fonts/computer-modern-typewriter-light/cmunbto.eot";
import cmunbto_svg from "./fonts/computer-modern-typewriter-light/cmunbto.svg";
import cmunbto_ttf from "./fonts/computer-modern-typewriter-light/cmunbto.ttf";
import cmunbto_woff from "./fonts/computer-modern-typewriter-light/cmunbto.woff";

export default () => {
  return (
    <style jsx global>{`
      @font-face {
        font-family: "Computer Modern Typewriter Light";
        src: url("${cmunbtl_eot}");
        src: url("${cmunbtl_eot}?#iefix") format("embedded-opentype"),
          url("${cmunbtl_woff}") format("woff"),
          url("${cmunbtl_ttf}") format("truetype"),
          url("${cmunbtl_svg}#cmuntt") format("svg");
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "Computer Modern Typewriter Light";
        src: url("${cmunbto_eot}");
        src: url("${cmunbto_eot}?#iefix") format("embedded-opentype"),
          url("${cmunbto_woff}") format("woff"),
          url("${cmunbto_ttf}") format("truetype"),
          url("${cmunbto_svg}#cmunbto") format("svg");
        font-weight: normal;
        font-style: italic;
      }
    `}</style>
  );
};
