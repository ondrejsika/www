var Align = {
  textAlign: "center",
  fontSize: "35px"
};
const LectureSectionLg = props => (
  <div className="d-none d-lg-block">
    <h3 className="pt-5 pb-4 green" style={Align}>
      {props.LectureImgHeader}
    </h3>
    <div className="container-flex banner-courses">
      <div className="d-flex row flex-row">{props.children}</div>
    </div>
  </div>
);

export default LectureSectionLg;
