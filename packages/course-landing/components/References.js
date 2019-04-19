const References = (props) => (
  <>
    <p>{props.reference}</p>
    <div class="row">
      <div class="col-4">
        <img src={props.imgRefer} class="img-fluid rounded-circle" alt="" />
      </div>
      <div class="col-8">
        <p><strong>{props.nameRefer}</strong></p>
        <p class="company">{props.position}</p>
      </div>
    </div>
  </>
)

export default References
