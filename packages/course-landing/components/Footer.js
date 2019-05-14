let style = {
  fontSize: '0.8em',
  margin: '0',
}

const Footer = (props) => (
  <div>
    <div className="container-fluid bg">
      <div className="container">
        <div className="text-center p-no-bottom pt-3 pb-3 text-white">
          {props.children}
          <p style={style}>
            Website by <a href="https://zuzjes.com" className="text-white"><strong>Zuzana Jeschke</strong></a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
