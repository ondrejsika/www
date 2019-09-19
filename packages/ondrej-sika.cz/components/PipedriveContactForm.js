import React from "react";

export default class PipedriveContactForm extends React.Component {
  render() {
    return (
      <div className="text-center">
        <div
          class="pipedriveWebForms"
          data-pd-webforms="https://pipedrivewebforms.com/form/f504126e0fb134359eccc29fa2a22bf16899125"
        ></div>
      </div>
    );
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://cdn.pipedriveassets.com/web-form-assets/webforms.min.js";
    script.async = true;
    document.body.appendChild(script);
  }
}
