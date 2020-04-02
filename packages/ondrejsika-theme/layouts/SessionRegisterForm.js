import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import Field from "@app/common/forms/Field";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import Button from "@app/ondrejsika-theme/components/Button";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();

const SessionRegisterForm = props => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    let data = {
      organizer_id: props.organizer_id,
      organizer_slug: props.organizer_slug,
      session_id: props.session_id,
      session_slug: props.session_slug,
      recaptcha: recaptchaRef.current.getValue(),
      name: values.name,
      company: values.company,
      email: values.email,
      phone: values.phone
    };
    console.log(recaptchaRef.current.getValue());
    console.log(data);
    fetch(props.site.trainingcrm_url + "/api/register/", {
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="name"
        label="Name"
        validation_required="You name is requires"
        register={register}
        errors={errors}
      />

      <Field
        name="company"
        label="Company"
        register={register}
        errors={errors}
      />

      <Field
        name="email"
        label="Email"
        register={register}
        errors={errors}
        validation_required="Your email is required"
        validation_pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
        validation_pattern_message="Your email is not valid"
      />

      <Field
        name="phone"
        label="Phone Number"
        register={register}
        errors={errors}
      />

      <ReCAPTCHA ref={recaptchaRef} sitekey={props.site.recaptcha_site_key} />

      <div className="pt-3">
        <Button site={props.site} href="#">
          Odeslat
        </Button>
      </div>
    </Form>
  );
};

export default SessionRegisterForm;
