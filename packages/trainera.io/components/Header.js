import logo from "@app/data/logos/trainera/trainera_white_logo_only.png";
import logo_text from "@app/data/logos/trainera/trainera_white_name_only.png";

const Header = props => (
  <div className="container">
    <img src={logo} height="70" />
    <img src={logo_text} height="60" />
  </div>
);

export default Header;
