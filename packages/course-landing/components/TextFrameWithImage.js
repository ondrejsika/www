const TextFrameWithImage = (props) => (
  <div class="card p-3 mb-4">
    <h3>{props.header}</h3>
    <div class="d-flex row">
      <div class="col-lg-12 pb-4">
        <div class="row">
          <div class="col-lg-10 col-md-12 pr-5">
            <p class="align-middle">{props.children}</p>
          </div>
          <div class="col-2 d-none d-lg-block">
            <img src={props.imgUrl} class="img-fluid rounded-circle" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default TextFrameWithImage
