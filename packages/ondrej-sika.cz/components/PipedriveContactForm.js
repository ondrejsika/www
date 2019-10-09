import React from "react";

export default class PipedriveContactForm extends React.Component {
  render() {
    // en
    let formId = "7d1db89e3afb5b3740971596f844b9436899125";

    if (this.props.lang == "cs")
      formId = "f504126e0fb134359eccc29fa2a22bf16899125";

    return (
      <div className="text-center mb-5" id="form">
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <iframe src="https://pipedrivewebforms.com/form/${formId}?embeded=1&amp" scrolling="no" style="border: none; overflow: hidden; width: 100%; max-width: 768px; min-width: 320px; height: 1319px; position: relative;"></iframe>
        `
          }}
        />
      </div>
    );
  }
}
