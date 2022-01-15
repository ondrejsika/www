import React from "react";
import { useForm } from "react-hook-form";
import fetch from "isomorphic-unfetch";
import Router from "next/router";

const SessionRegisterForm = props => {
  const { handleSubmit, register } = useForm();
  const onSubmit = values => {
    let data = {
      topic_slug: "kniha",
      email: values.email
    };
    console.log(data);
    fetch(props.site.trainingcrm_url + "/api/subscribe/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => {
      console.log(res);
      if (res.status == 200) Router.push("/odeslano");
      else Router.push("/odeslano-chyba");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-inline">
      <div className="form-group mx-sm-3 mb-2 align-items-center">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
          ref={register({})}
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Kniha mě zajímá
      </button>
    </form>
  );
};

export default SessionRegisterForm;
