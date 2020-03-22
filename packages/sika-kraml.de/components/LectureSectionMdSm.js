var Align = {
  textAlign: "center",
  fontSize: "35px"
};

const CourseBar = props => (
  <div className="d-none d-md-block d-lg-none">
    <h3 className="pt-4 pb-2" style={Align}>
      {props.LectureImgHeader}
    </h3>
    <div className="container-flex banner-courses">
      <div className="d-flex">
        <div className="row">{props.children}</div>
      </div>
    </div>
  </div>
);

export default CourseBar;
