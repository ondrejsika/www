import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Field from "@app/common/forms/Field";

import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();

const ExampleForm = props => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(recaptchaRef.current.getValue());
    let out = [
      `name: ${values.name}`,
      `company: ${values.company || "--"}`,
      `email: ${values.email}`,
      `phone: ${values.phone || "--"}`,
      `course: ${values.course}`,
      `session: ${values.session}`,
      recaptchaRef.current.getValue()
    ];
    alert(out.join(", "));
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

      <Field
        name="course"
        as="select"
        label="Course"
        register={register}
        errors={errors}
        validation_required="Course is required"
      >
        <option></option>
        <option>Docker</option>
        <option>Kubernetes</option>
        <option>Gitlab CI</option>
      </Field>

      <Field
        name="session"
        as="select"
        label="Session"
        register={register}
        errors={errors}
        validation_required="Session is required"
      >
        <option></option>
        <option value="kubernetes-2020-02-01">Kubernetes 1. 2. 2020</option>
        <option value="kubernetes-2020-04-01">Kubernetes 1. 4. 2020</option>
        <option value="kubernetes-2020-06-01">Kubernetes 1. 6. 2020</option>
      </Field>
      <ReCAPTCHA ref={recaptchaRef} sitekey={props.site.recaptcha_site_key} />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

const Index = props => (
  <div className="container">
    <ExampleForm site={props.site} />
  </div>
);

export default Index;
