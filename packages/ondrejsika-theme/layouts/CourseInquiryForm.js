import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import Field from "@app/common/forms/Field";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
// import Button from "@app/ondrejsika-theme/components/FormButton";
import ReCAPTCHA from "react-google-recaptcha";
import Translate from "@app/common/components/Translate";

const recaptchaRef = React.createRef();

const CourseInquiryForm = (props) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    let data = {
      course_slug: props.course_slug,
      recaptcha: recaptchaRef.current.getValue(),
      name: values.name,
      company: values.company,
      email: values.email,
      phone: values.phone
    };
    console.log(recaptchaRef.current.getValue());
    console.log(data);
    console.log(JSON.stringify(data));
    fetch(props.site.trainingcrm_url + "/api/inquiry/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log(res);
      if (res.status == 200) Router.push("/odeslano");
      else Router.push("/odeslano-chyba");
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>
        <Translate
          lang={props.site.lang}
          cs="Nezávazná poptávka"
          en="Non-binding Inquiry"
          de="Non-binding Inquiry"
        />
      </h2>

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

      <div className="pt-5">
        <button site={props.site}>
          <Translate lang={props.site.lang} cs="Odeslat" en="Submit" />
        </button>
      </div>
    </Form>
  );
};

export default CourseInquiryForm;
