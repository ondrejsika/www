const Person = props => (
  <div>
    <img src={props.imgSrc} />
    <h2>{props.name}</h2>
    <p>{props.bio}</p>
  </div>
)

export default Person
