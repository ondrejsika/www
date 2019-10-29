const OrderButton = props => (
  <div>
    {(() => {
      if (props.TextParagraph) {
        return <p>{props.TextParagraph}</p>;
      }
    })()}
    <div className="center pb-3">
      <a
        href="mailto:ondrej@sika.io?subject=[ondrej-sika.cz] Poptavka firemniho skoleni Dockeru&body=fuck off%0D%0Aaaaaaaaaaaaaaaaa"
        className="btn btn-order btn-success"
      >
        {props.children}
      </a>
      <div className="text-secondary btn-invisible">ondrej@sika.io</div>
    </div>
  </div>
);

export default OrderButton;
