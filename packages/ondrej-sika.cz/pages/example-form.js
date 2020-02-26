import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Field from "@app/common/forms/Field";

const ExampleForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    alert(
      `name: ${values.name}, company: ${values.company || "--"}, email: ${
        values.email
      }, phone: ${values.phone || "--"}`
    );
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

const Index = () => (
  <div className="container">
    <ExampleForm />
  </div>
);

export default Index;
