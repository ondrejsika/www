import React from "react";

export default class PipedriveContactForm extends React.Component {
  render() {
    return (
      <div className="text-center mb-5" id="form">
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <iframe src="https://pipedrivewebforms.com/form/f504126e0fb134359eccc29fa2a22bf16899125?embeded=1&amp" scrolling="no" style="border: none; overflow: hidden; width: 100%; max-width: 768px; min-width: 320px; height: 1319px; position: relative;"></iframe>
        `
          }}
        />
      </div>
    );
  }
}
