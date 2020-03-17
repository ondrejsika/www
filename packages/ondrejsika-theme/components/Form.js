import React from "react";
import Former2 from "@app/common/components/Former2";
import site from "@app/ondrej-sika.cz/config";

const Form = props => (
  <div id="form">
    <Former2 site={site} name="Course inquiry" redirect_path="/odeslano">
      <input type="hidden" value={props.course} name="course" />
      <div className="form-group">
        <div className="col-md-4 mb-3 pl-0">
          <label htmlFor="validationDefault01">{props.FormName}</label>
          <input
            type="text"
            className="form-control-border"
            id="validationDefault01"
            name="name"
            placeholder={props.FromNamePlaceholder}
            required
          />
        </div>
        <div className="col-md-4 mb-3 pl-0">
          <label htmlFor="validationDefault02">{props.FormCompany}</label>
          <input
            type="text"
            className="form-control-border"
            id="validationDefault02"
            name="company"
            placeholder={props.FormCompanyPlaceholder}
          />
        </div>
        <div className="col-md-4 mb-3 pl-0">
          <label htmlFor="validationDefault03">{props.FormEmail}</label>
          <input
            type="email"
            className="form-control-border"
            id="validationDefault03"
            name="email"
            placeholder={props.FormEmailPlaceholder}
            required
          />
        </div>
        <div className="col-md-4 mb-3 pl-0">
          <label htmlFor="validationDefault04">{props.FormPhone}</label>
          <input
            type="tel"
            className="form-control-border"
            id="validationDefault04"
            name="phone"
            placeholder={props.FormPhonePlaceholder}
            required
          />
        </div>
      </div>
      <button className="btn btn-succes mb-4" type="submit">
        {props.FormSent}
      </button>
    </Former2>
  </div>
);

export default Form;
