var mainBar = {
  background: "#00212C"
};

var colorText = {
  color: "#09AEAB"
};

const MainBar = props => (
  <div>
    <div className="main-bar" style={mainBar}>
      <div className="container pt-4 pb-4">
        <h1 className="pt-3 pb-3  text-white">{props.MainBarHeader}</h1>
        <h3 style={colorText}>{props.MainBarText}</h3>
        {props.children}
      </div>
    </div>
  </div>
);

export default MainBar;
